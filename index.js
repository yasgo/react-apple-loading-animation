import './style/style.scss';

const AppleLoadingAnimation = (props) => {
    return (
        props.isShow && (
            <div className="loading">
                <div className="indicator">
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                </div>
            </div>
        )
    )
}

module.exports.AppleLoadingAnimation = AppleLoadingAnimation;