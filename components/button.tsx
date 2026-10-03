export default function Button({ title }: { title: string }) {
	return (
		<button className="px-5 py-2.5 outline-none rounded-[10px] text-sm text-white leading-tight tracking-tight uppercase font-semibold bg-orange hover:bg-orange-deep active:translate-y-[1px] transition-all ease-out duration-200 shadow-card">
			{title}
		</button>
	);
}
