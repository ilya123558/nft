import { Container } from "@/src/shared/ui/container/Container"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
	return (
		<div className="w-full bg-primary rounded-t-[70px] shadow-[0_4px_34px_0_rgba(148,155,0,0.5)] mt-[110px]">
			<Container className="p-[134px_0px_127px] flex justify-between">
				<div className="">
					<Link href={'https://avatarsgame.ru/)'} className='flex items-center'>
						<Image src={'/footer/logo.svg'} width={48} height={43} alt='logo' className="mr-[10px]"/>
						<Image src={'/footer/logo-text.svg'} width={139} height={26} alt='logo-text' />
					</Link>
					<div className="mt-[36px] flex flex-col">
						<h5 className="text-[23px]">Контакты для связи</h5>
						<Link href={'mailto:scroogeavatars@gmail.com'} className="mt-[15px] text-secondary">scroogeavatars@gmail.com</Link>
						<Link href={'https://t.me/Avatarsgroup'} className="mt-[15px] text-secondary">Telegram: @Avatars_Scrooge</Link>
					</div>
					<div className="mt-[36px]">
						<h5 className="text-[23px]">Подписывайтесь</h5>
						<div className="flex items-center mt-[15px]">
							<Link href={'/'}>
								<Image src={'/footer/youtube.svg'} width={40} height={40} alt='youtube' className="mr-[40px]"/>
							</Link>
							<Link href={'/'}>
								<Image src={'/footer/telegram.svg'} width={40} height={40} alt='telegram' className="mr-[40px]"/>
							</Link>
							<Link href={'/'}>
								<Image src={'/footer/vk.svg'} width={40} height={40} alt='vk' className=""/>
							</Link>
						</div>
					</div>
				</div>
				
				<div className="">
					<h5 className="text-[23px]">Направления</h5>
					<div className="flex flex-col">
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Buy & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Play & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Trade & earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Steak & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Create & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Drive & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Buy & Use</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Services & partners</Link>
					</div>
				</div>

				<div className="">
					<h5 className="text-[23px]">Партнеры</h5>
					<div className="flex flex-col">
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Buy & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Play & Earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Trade & earn</Link>
						<Link href={'https://avatarsgame.ru/buy_and_earn'} className="mt-[15px] text-secondary">Steak & Earn</Link>
					</div>
				</div>
			</Container>
		</div>
	) 
}
