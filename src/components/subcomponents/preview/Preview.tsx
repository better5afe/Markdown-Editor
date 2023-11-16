import { SectionProps } from '../../../@types/components/component-types';

const Preview: React.FC<SectionProps> = ({ preview }) => {
	return (
		<section
			className={`w-full p-[1.6rem] md:block ${
				preview ? 'block md:w-full' : 'hidden md:w-1/2'
			} bg-red-400`}
		>
			PREVIEW
		</section>
	);
};

export default Preview;
