import React from 'react';

import clsx from 'clsx';

export function LikeButton() {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div>
      <button
        type="button"
        className={clsx(
          'border-0 hover:border-0!',
          'text-gray-400 hover:text-red-500',
          isLiked && 'text-red-500',
          'cursor-pointer p-0!',
        )}
        onClick={() => setIsLiked(!isLiked)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={`${isLiked ? 'currentColor' : 'none'}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      </button>
    </div>
  );
}
