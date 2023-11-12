import DocumentIcon from '../../assets/icons/icon-document.svg';
import { DocumentCardProps } from '../../@types/components/component-types';

const DocumentCard: React.FC<DocumentCardProps> = ({
    cardType,
	cardTitle,
	documentName,
}) => {
	return (
		<li
			className={`flex items-center font-regular ${
				cardType === 'header'
					? 'px-[2.4rem] border-l-[1px] border-darkGray200'
					: 'py-[1.3rem]'
			}`}
		>
			<img src={DocumentIcon} alt='' aria-hidden={true} />
			<div className='ms-[1.62rem]'>
				<h4 className='text-[1.3rem] font-light text-darkGray100'>
					{cardTitle}
				</h4>
				<p className='text-[1.5rem] text-white'>{documentName}</p>
			</div>
		</li>
	);
};

export default DocumentCard;
