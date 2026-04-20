<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    as?: string
    split?: 'words' | 'lines' | 'chars'
    delay?: number
    stagger?: number
    once?: boolean
  }>(),
  { as: 'span', split: 'words', delay: 0, stagger: 0.06, once: true },
)

const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(async () => {
  if (!process.client || !el.value) return
  const { default: SplitType } = await import('split-type')
  const { gsap } = await import('gsap')

  const split = new SplitType(el.value, {
    types: props.split === 'words' ? 'words' : props.split === 'lines' ? 'lines' : 'chars',
    tagName: 'span',
  })

  const targets =
    props.split === 'words' ? split.words : props.split === 'lines' ? split.lines : split.chars

  if (!targets || !targets.length) return

  // Wrap each target in overflow:hidden wrapper
  targets.forEach((t) => {
    const parent = document.createElement('span')
    parent.className = 'inline-block overflow-hidden align-baseline'
    t.classList.add('inline-block', 'will-change-transform')
    ;(t as HTMLElement).style.transform = 'translateY(115%)'
    t.parentNode?.insertBefore(parent, t)
    parent.appendChild(t)
  })

  const run = () => {
    gsap.to(targets, {
      y: 0,
      duration: 1,
      delay: props.delay,
      stagger: props.stagger,
      ease: 'power4.out',
      onStart: () => {
        targets.forEach((t) => ((t as HTMLElement).style.transform = ''))
      },
    })
    gsap.fromTo(
      targets,
      { yPercent: 115 },
      {
        yPercent: 0,
        duration: 1.1,
        delay: props.delay,
        stagger: props.stagger,
        ease: 'power4.out',
      },
    )
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          run()
          if (props.once) observer?.disconnect()
        }
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
  )
  observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <component :is="props.as" ref="el" class="split-parent">
    <slot />
  </component>
</template>
