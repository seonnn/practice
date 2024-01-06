import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // 진입점(여러 진입점은 객체 또는 배열로 지정할 수 있음)
      entry: resolve(__dirname, 'index.ts'),
      formats: ["es", "umd"]
    },
    rollupOptions: {
      // 라이브러리에 포함하지 않을 디펜던시
      external: ['react'],
      output: {
        // 라이브러리 외부에 존재하는 디펜던시를 위해 UMD(Universal Module Definition) 번들링 시 사용될 전역 변수
        globals: {
          react: 'React'
        }
      }
    }
  }
})
