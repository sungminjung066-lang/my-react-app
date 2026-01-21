import clsx from 'clsx';

interface ProductImgPros {
  imageUrl: string;
  name?: string;
}

export default function ProductImg({ imageUrl, name }: ProductImgPros) {
  return (
    <div className={clsx('mb-5 overflow-hidden rounded-lg bg-gray-100')}>
      <img
        src={imageUrl}
        alt={name}
        className={clsx(
          'h-full w-full',
          'object-cover object-center',
          'transition-transform duration-300 group-hover:scale-105',
        )}
      />
    </div>
  );
}
