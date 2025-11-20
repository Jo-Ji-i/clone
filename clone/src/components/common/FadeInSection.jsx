import { useAnimation, useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FadeInSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const ref = useRef(null);

  // once: false로 변경 - 스크롤할 때마다 애니메이션 실행
  const inView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      // 화면 밖으로 나가면 다시 hidden으로
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 1.5, // 커질 수록 더 느리게)
        delay,
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
