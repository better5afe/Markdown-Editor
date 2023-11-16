import { SectionProps } from '../../../@types/components/component-types';

const Markdown: React.FC<SectionProps> = ({ preview }) => {
	return (
		<section
			className={`w-full p-[1.6rem] md:w-1/2 ${
				preview ? 'hidden' : 'block'
			} bg-red-100`}
		>
			MARKDOWN
		</section>
	);
};

export default Markdown;
