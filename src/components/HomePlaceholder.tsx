import { loginUrl } from "../util/spotify"

const HomePlaceholder = ({logInSpotify, accToken}: any) => {
    return (
        <div className='homePlaceholder'>
          <div>Get the colors of your top 5 spotify tracks</div>
          <a href={loginUrl}>Login to Spotify</a> {/* will go away if logged in to spotify */}
        </div>
    )
}

export default HomePlaceholder