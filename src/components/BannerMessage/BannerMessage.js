import classes from './BannerMessage.module.css'

const BannerMessage = () => {
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.bannerMsg} />
      <div className={classes.bannerTextWrapper}>
        <h2 className={classes.bannerText}>CONSULTA NUESTRAS PUBLICACIONES RECIENTES EN FACEBOOK</h2>
      </div>
    </div>
  )
}

export default BannerMessage