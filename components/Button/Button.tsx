import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
// import Image from 'next/image';
import Vector from './Vector.svg';


export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost'
      })}
      {...props}
    >

      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow == 'down'
      })}
      >
        {/* <Image
            className='arrowIcon'
            src="./Vector.svg"
            alt="Next.js Logo"
            width={10}
            height={10}
            priority
          /> */}
          <Vector/>
      </span>}
    </button>
  )
}