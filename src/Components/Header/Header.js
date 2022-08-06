import React, { useState } from "react"
import style from "./style.module.css"
import rightToLeft from "../../Assets/image/rightToLeft.svg"
import leftToRight from "../../Assets/image/leftToRight.svg"
import one from "../../Assets/image/1.svg"
import two from "../../Assets/image/2.svg"
import three from "../../Assets/image/3.svg"
import four from "../../Assets/image/4.svg"
import five from "../../Assets/image/5.svg"
import six from "../../Assets/image/6.svg"
import seven from "../../Assets/image/7.svg"
import eight from "../../Assets/image/8.svg"
import plusIcon from "../../Assets/image/plusIcon.svg"
import equal from "../../Assets/image/equal.svg"
import king from "../../Assets/image/king.svg"
import Layer from "../../Assets/image/Layer.svg"
import frame from "../../Assets/image/frame.svg"

const Header = () => {
  const [leftData, setLeftData] = useState([one, two, three, four, five])
  const [rightData, setRightData] = useState([six, seven, eight])
  const [active, setActive] = useState("")

  const onRightToLeft = () => {
    setRightData(rightData.filter((d) => d !== active))
    setLeftData((pre) => [...pre, active])
    setActive("")
  }

  const onLeftToRight = () => {
    setLeftData(leftData.filter((d) => d !== active))
    setRightData((pre) => [...pre, active])
    setActive("")
  }

  return (
    <div className={`${style.customContainer} container`}>
      <div className={style.headingWrap}>
        <h3 className={`${style.heading}`}>Upgrade Your Sovereign</h3>
      </div>
      <div className="row">
        <div className={`${style.bgImage} col-lg-3 col-md-6 my-3`}>
          <p className={style.walletKey}>Your wallet</p>
          <h2 className={style.walletValue}>KTBI . . . . Z4Th</h2>
        </div>
        <div className={`${style.bgImage} col-lg-3 col-md-6 my-3`}>
          <p className={style.walletKey}>Sovereign staked</p>
          <h2 className={style.walletValue}>04</h2>
        </div>
        <div className={`${style.bgImage} col-lg-3 col-md-6 my-3`}>
          <p className={style.walletKey}>Estimated Rewards</p>
          <h2 className={style.walletValue}>0.0027 $SQRE</h2>
        </div>
        <div className="col-lg-3 col-md-6 my-3">
          <p className={style.walletKey}>Reward State</p>
          <h2 className={style.walletValue}>0 $SQRE/day</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div>
          <button className={`${style.claimButton}`}>Claim $SQRE</button>
        </div>
        <div>
          <button className={`${style.claimButton}`}>Claim $SQRE</button>
        </div>
      </div>
      <div className="row">
        <div className={`${style.customTransfer} col-lg-5 my-3`}>
          <p className={style.transferHeader}>Your wallet</p>
          <div className="row">
            {leftData.map((d, i) => (
              <div
                key={i}
                className={`${
                  active === d ? style.activeBorder : style.deActiveBorder
                } col-3 p-3`}
              >
                <img
                  type="button"
                  onClick={() => setActive(d)}
                  className={`img-fluid`}
                  src={d}
                  alt="left"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`${style.transferButtonWrap} col-lg-2 my-3`}>
          <img
            className={`${style.transferButton} img-fluid`}
            src={rightToLeft}
            alt="rightToLeft"
            onClick={onRightToLeft}
          />
          <img
            className={`${style.transferButton} img-fluid`}
            src={leftToRight}
            alt="leftToRight"
            onClick={onLeftToRight}
          />
        </div>
        <div className={`${style.customTransfer} col-lg-5 my-3`}>
          <p className={style.transferHeader}>Your wallet</p>
          <div className="row">
            {rightData.map((d, i) => (
              <div
                key={i}
                className={`${
                  active === d ? style.activeBorder : style.deActiveBorder
                } col-3 p-3`}
              >
                <img
                  type="button"
                  onClick={() => setActive(d)}
                  className={`img-fluid`}
                  src={d}
                  alt="left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className={`col-12`}>
          <h3 className={style.headingOne}>Transcend Your Sovereign</h3>
        </div>
        <div className={`col-lg-3 col-md-12 my-3`}>
          <p className={style.stepTitle}>Step1</p>
          <h2 className={style.stepDescription}>
            Choose a Sovereign you wish to transcend
          </h2>
          <div className={style.stepBox}>
            <img className={`img-fluid`} src={king} alt="left" />
          </div>
        </div>
        <div
          className={`col-lg-1 col-md-12 my-3 d-flex align-items-center justify-content-center`}
        >
          <img className={`img-fluid`} src={plusIcon} alt="left" />
        </div>
        <div className={`col-lg-3 col-md-12 my-3`}>
          <p className={style.stepTitle}>Step2</p>
          <h2 className={style.stepDescription}>
            Buy $SQRE to transcend to a Sovereign
          </h2>
          <div className={style.stepBox}>
            <img className={`img-fluid`} src={Layer} alt="left" />
          </div>
        </div>
        <div
          className={`col-lg-1 col-md-12 my-3 d-flex align-items-center justify-content-center`}
        >
          <img className={`img-fluid`} src={equal} alt="left" />
        </div>
        <div className={`col-lg-3 col-md-12 my-3`}>
          <p className={style.stepTitle}>Step3</p>
          <h2 className={style.stepDescription}>Click that transcend button</h2>
          <div className={`${style.stepBox} ${style.frameBox}`}>
            {/* <img className={`img-fluid`} src={frame} alt="frame" /> */}
          </div>
          <button className={`${style.transcendButton}`}>TRANSCEND</button>
        </div>
      </div>
    </div>
  )
}

export default Header
