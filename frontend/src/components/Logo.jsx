import logo from '../../assets/logo.png'

export default function Logo() {
	return (
		<div className="flex items-center text-pink8 font-bold text-2xl">
            <span className="mr-2">heart</span>
            <span className="text-pink5 -ml-2">2heart</span>
			<img src={logo} alt="Heart Logo" className="w-12 -ml-1" />
        </div>
	);
}
