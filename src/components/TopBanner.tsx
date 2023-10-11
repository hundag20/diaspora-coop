import '../styles/topBanner.scss';
import famousMonumnets from '../assets/img/famous-monuments-world_117023-91-1.jpg';
import waveSvg from '../assets/img/wave.svg';
export interface ITopBannerProps {
  containerClass: string;
  overlayClass: string;
  contentClass: string;
  footerClass: string;
  contentHeader: string;
  contentParagraph: string;
}

export function TopBanner(props: ITopBannerProps) {
  return (
    <div className={props.containerClass}>
      <div className={props.overlayClass}></div>
      <div className={props.contentClass}>
        <h1>{props.contentHeader}</h1>
        <p id='banner-subheader'>{props.contentParagraph}</p>
      </div>
      <div className={props.footerClass}>
        <img className='svg' src={waveSvg}></img>
      </div>
    </div>
  );
}
