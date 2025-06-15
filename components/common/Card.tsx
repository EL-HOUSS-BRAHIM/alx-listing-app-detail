import Image from 'next/image';
import { CardProps } from '../../interfaces';
import Button from './Button';

const Card = ({ title, description, image, onAction, buttonText }: CardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md max-w-sm">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {onAction && <Button label={buttonText} onClick={onAction} />}
      </div>
    </div>
  );
};

export default Card;
