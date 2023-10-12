import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from "react";
import Image from "next/image";

export const Rating = ({isEditable = false, rating, className, setRating, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return(
        <Image
            src="./star.svg"
            className={cn(styles.star, className, {
              [styles.filled]: i < currentRating
            })}
            style={{ [styles.filled]: i < currentRating] }}
            alt="star"
            width={15}
            height={15}
          />
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}

    </div>
  );
};