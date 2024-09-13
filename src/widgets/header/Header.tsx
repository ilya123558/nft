import { Container } from '@/src/shared/ui/container/Container'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
	return (
		<div className='shadow-[0_4px_34px_0_rgba(148,155,0,0.3)]'>
			<Container className='py-6 flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<Image src={'/logo.svg'} width={200} height={43} alt='logo' />
						<div>Buy & Use</div>
					</div>
					<div className='flex items-center gap-[45px]'>
						<div className='relative'>
							<input
								type='text'
								className='pl-[20px] py-[7px] pr-[50px] max-w-[300px] bg-transparent border border-solid border-[#949B00] rounded-[10px]'
								placeholder='Название NFT'
							/>
							<div className='absolute top-1/2 -translate-y-1/2 right-[20px]'>
								<Image src={'search.svg'} width={18} height={18} alt='Лупа' />
							</div>
						</div>
						<Link className='text-[20px]' href={'#'}>
							Купить NFT
						</Link>
						<Link className='text-[20px]' href={'#'}>
							Загрузить NFT
						</Link>

						<Link href={'#'}>
							<div className='relative'>
								<Image src={'/cart.svg'} width={20} height={20} alt='cart' />
								<div className='absolute -top-3 -right-4 text-[12px] rounded-full px-[6px] py-[2px] bg-[#bdcf01] text-[#000]'>
									12
								</div>
							</div>
						</Link>
					</div>
			</Container>
		</div>
	)
}
