import cn from 'classnames';
import styles from './Typography.module.css';

const Typography = ({ as, className, ...xyz }) => {
  const Component = as || 'p';
  return (
    <Component
      className={cn(styles[Component], {
        [className]: className,
      })}
      {...xyz}
    />
  );
};

export default Typography;
