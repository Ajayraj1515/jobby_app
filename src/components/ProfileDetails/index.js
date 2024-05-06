import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ProfileDetails = props => {
  const renderProfile = () => {
    const {profileDetails} = props
    const {profileImageUrl} = profileDetails
    return (
      <div className="profile-details-container">
        <img src="https://res.cloudinary.com/dnggronrp/image/upload/v1714986565/qcqdbuyutlrhjh4cdgxj.jpg" alt="profile" className="profile-image" />
        <h1 className="profile-name">Kattina Dhamoji Ajayraj</h1>
        <p className="profile-bio">
          Lead Software Developer and Full-stack expert
        </p>
      </div>
    )
  }

  const renderProfileFailure = () => {
    const {getProfileDetails} = props
    return (
      <div className="profile-failure-container">
        <button
          className="retry-button"
          type="button"
          onClick={getProfileDetails}
        >
          Retry
        </button>
      </div>
    )
  }

  const renderProfileLoader = () => (
    <div className="loader-container-profile" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const {profileApiStatus} = props

  switch (profileApiStatus) {
    case apiStatusConstants.inProgress:
      return renderProfileLoader()
    case apiStatusConstants.success:
      return renderProfile()
    case apiStatusConstants.failure:
      return renderProfileFailure()
    default:
      return null
  }
}

export default ProfileDetails
