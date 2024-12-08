import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'

type Props = {}

export function Slogan({ }: Props) {
  return (
    <section className={cn('mx-auto mt-8 max-w-[1440px] overflow-x-hidden md:mt-3')}>
      <div>
        <h1
          key='Превращаем ресурсы в цифровые активы'
          className={cn(
            'mx-auto text-center font-medium flex gap-2 flex-wrap justify-center',
            'max-w-[310px] text-[28px] leading-[30.24px]',
            'md:max-w-[470px] md:text-[42px] md:leading-[45.36px]',
            'lg:max-w-[800px] lg:text-7xl lg:leading-[79.20px]'
          )}
        >
          <span>Превращаем</span>
          <BoxReveal width='fit-content'>
            <span className='text-fierly'>ресурсы</span>
          </BoxReveal>
          <span>в цифровые активы</span>
        </h1>

        <p
          className={cn(
            'mx-auto mt-8 text-center text-light-gray',
            'max-w-[300px] text-xs',
            'md:max-w-[550px] md:text-base md:leading-[21.12px]'
          )}
        >
          Мы позволяем обходить большинство сложностей современной Российской экономики и помогаем в
          построении взаимовыгодных связей мировым финансовым институция.
        </p>
      </div>

      <div key='slogan video' className={cn('relative mt-12 lg:mt-20 1.5xl:mt-24')}>
        <video
          controls={false}
          autoPlay
          muted
          loop
          className={cn(
            'flex h-full max-h-[274px] w-full justify-center object-center',
            'md:mx-auto md:scale-x-150',
            'lg:max-h-[400px] lg:scale-x-125',
            '1.5xl:max-h-[528px]'
          )}
        >
          <source src='grid.mp4' type='video/mp4' />
          Ваш браузер не поддерживает видео. Пожалуйста, обновите его.
        </video>

        <div
          key='scroll down'
          className={cn(
            'absolute flex items-center gap-2 text-light-gray',
            'bottom-0 left-6 xs:left-[15vw] md:bottom-7 md:left-[10vw] lg:bottom-14'
          )}
        >
          <p className='text-xs font-medium uppercase leading-[13.92px] tracking-wide'>
            scroll down
          </p>

          <svg width='9' height='10' fill='none' viewBox='0 0 9 10'>
            <path
              fill='currentColor'
              d='M3.938.5v6.846L.796 4.204 0 5l4.5 4.5L9 5l-.796-.796-3.142 3.142V.5H3.938Z'
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
