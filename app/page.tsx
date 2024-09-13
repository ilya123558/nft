import { Container } from '@/src/shared/ui/container/Container'
import { NftList } from '@/src/widgets/nft-list/NftList'
import { SellerList } from '@/src/widgets/seller-list/SellerList'
import { SliderPopular } from '@/src/widgets/slider-popular/SliderPopular'
import Image from 'next/image'

export default function Home() {
	return (
		<Container className='pt-[100px]'>
			<div className='relative'>
				<div>
					<div className='text-[55px] font-bold'>
						Используйте NFT в своем мире
					</div>
					<div className='text-[30px] max-w-[380px] mt-[20px]'>
						Здесь вы найдете то, чем будете пользоваться
					</div>
				</div>
				<Image
					className='absolute right-[-150px] top-0'
					src={'./planet.svg'}
					width={620}
					height={450}
					alt='Планета'
				/>
			</div>
			<div className='text-[35px] text-gray font-bold mt-[200px]'>
				Buy & Use
			</div>
			<SliderPopular />
			<SellerList />
			<NftList />
		</Container>
	)
}
