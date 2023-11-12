import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { DocumentCardProps } from '../../@types/components/component-types';
import IconDocument from '../../assets/icons/icon-components/IconDocument';
import Button from './Button';

const DocumentCard: React.FC<DocumentCardProps> = ({
	cardType,
	cardTitle,
	documentName,
}) => {
	const [isEditing, setIsEditing] = useState(false);

	let isDesktop = useMediaQuery('only screen and (min-width: 1200px)');

	const changeNameHandler = (event: React.MouseEvent) => {
		if (
			(!isDesktop && event.detail === 1) ||
			(isDesktop && event.detail === 2)
		) {
			setIsEditing(true);
		}
	};

	const saveNameHandler = () => {
		setIsEditing(false);
		console.log('Name changed!');
	};

	return (
		<li
			className={`flex items-center font-regular ${
				cardType === 'header'
					? 'px-[2.4rem] xl:border-l-[1px] xl:border-darkGray200'
					: 'py-[1.3rem]'
			}`}
		>
			<Button
				className='icon'
				onClick={() => console.log('Switch to this card')}
			>
				<IconDocument />
			</Button>
			<div className='ms-[1.62rem]'>
				<h4 className='hidden md:block md:text-[1.3rem] md:font-light md:text-darkGray100 md:cursor-default'>
					{cardTitle}
				</h4>
				<p className='text-[1.5rem] text-white' onClick={changeNameHandler}>
					{isEditing ? (
						<input
							className='bg-transparent outline-none caret-primaryDark border-b-[1px]'
							autoFocus={true}
							type='text'
							defaultValue={documentName}
							onBlur={saveNameHandler}
						/>
					) : (
						documentName
					)}
				</p>
			</div>
		</li>
	);
};

export default DocumentCard;
