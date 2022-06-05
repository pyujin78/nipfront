import styled from "styled-components";
import I_copy from "../../img/icon/I_copy.svg";
import I_circleChk from "../../img/icon/I_circleChk.svg";
import { D_recommendList } from "../../data/DmyPage";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { strDot } from "../../util/Util";
import { D_rewardHeader, D_rewardList, D_vaultHeader, D_vaultList } from "../../data/Dstaking";
import { getmyaddress, LOGGER } from "../../util/common";
import axios from "axios";
import moment from "moment";
import { API } from "../../configs/api";

export default function Staking() {
  const isMobile = useSelector((state) => state.common.isMobile);

  const [toggleCode, setToggleCode] = useState(false);
  const [toggleLink, setToggleLink] = useState(false);
  const [logstakes, setLogstakes] = useState();

  const fatchData = () => {
    let myaddress = getmyaddress();
    axios.get(API.API_LOGSTAKES + `/${myaddress}`).then((resp) => {
      LOGGER("API_LOGSTAKES", resp.data);
      let { status, respdata } = resp.data;
      if (status == "OK") {
        setLogstakes([respdata]);
      }
    });
  };

  useEffect(() => {
    fatchData();
  }, []);

  if (isMobile)
    return (
      <MstakingBox>
        <ul className="contList">
          <li className="vaultsBox">
            <strong className="contTitle">Vaults</strong>

            <div className="listBox">
              <ul className="list">
                {D_vaultList.map((cont, index) => (
                  <li key={index}>
                    <div className="topBar">
                      <img src={cont.img} alt="" />
                      <p className="title">{cont.name}</p>
                    </div>

                    <ul className="dataList">
                      <li>
                        <p className="key">Staking Amount</p>
                        <p className="value">{cont.amount} USDT</p>
                      </li>
                      <li>
                        <p className="key">Start</p>
                        <p className="value">{cont.start}</p>
                      </li>
                      <li>
                        <p className="key">Ended</p>
                        <p className="value">{cont.end}</p>
                      </li>
                    </ul>

                    <button className="unstakeBtn" onClick={() => {}}>
                      Unstake
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="rewardBox">
            <strong className="contTitle">Earned Rewards</strong>

            <div className="listBox">
              <ul className="list">
                {D_rewardList.map((cont, index) => (
                  <li key={index}>
                    <div className="topBar">
                      <img src={cont.img} alt="" />
                      <p className="title">{cont.name}</p>
                    </div>

                    <ul className="dataList">
                      <li>
                        <p className="key">Staking Amount</p>
                        <p className="value">{cont.amount} USDT</p>
                      </li>
                      <li>
                        <p className="key">APY</p>
                        <p className="value">{cont.apy}</p>
                      </li>
                      <li>
                        <p className="key">Reward Distribution Cycle</p>
                        <p className="value">{cont.cycle}</p>
                      </li>
                      <li>
                        <p className="key">Earned</p>
                        <p className="value">{cont.earned} NIP</p>
                      </li>
                    </ul>

                    <button className="unstakeBtn" onClick={() => {}}>
                      Claim
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </MstakingBox>
    );
  else
    return (
      <PstakingBox>
        <ul className="contList">
          <li className="vaultsBox">
            <strong className="contTitle">Vaults</strong>

            <div className="listBox">
              <ul className="listHeader">
                {D_vaultHeader.map((cont, index) => (
                  <li key={index}>{cont}</li>
                ))}
              </ul>

              <ul className="list">
                {logstakes &&
                  logstakes?.map((cont, index) => (
                    <li key={index}>
                      <span>
                        {/* <img src={cont.img} alt="" /> */}
                        <p>{cont.active === 1 ? "ACTIVE" : "UNACTIVE"}</p>
                      </span>

                      <span>
                        <p>{cont.amount}&nbsp;USDT</p>
                      </span>

                      <span>{moment(cont.createdat).format("YYYY-MM-DD hh:mm:ss")}</span>

                      <span>{moment(cont.createdat).add(90, "day").format("YYYY-MM-DD hh:mm:ss")}</span>

                      <span>
                        <button className="unstakeBtn" onClick={() => {}}>
                          Unstake
                        </button>
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </li>

          <li className="rewardBox">
            <strong className="contTitle">Earned Rewards</strong>

            <div className="listBox">
              <ul className="listHeader">
                {D_rewardHeader.map((cont, index) => (
                  <li key={index}>{cont}</li>
                ))}
              </ul>

              <ul className="list">
                {D_rewardList.map((cont, index) => (
                  <li key={index}>
                    <span>
                      <img src={cont.img} alt="" />
                      <p>{cont.name}</p>
                    </span>

                    <span>
                      <p>{cont.amount}&nbsp;USDT</p>
                    </span>

                    <span>{cont.apy}%</span>

                    <span>{cont.cycle}</span>

                    <span>
                      <p>{cont.earned} NIP</p>
                      <button className="claimBtn" onClick={() => {}}>
                        Claim
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </PstakingBox>
    );
}

const MstakingBox = styled.section`
  padding: 9.16vw 5.55vw 0 5.55vw;

  .contList {
    display: flex;
    flex-direction: column;
    gap: 9.44vw;

    & > li {
      display: flex;
      flex-direction: column;
      gap: 4.44vw;

      .contTitle {
        font-size: 5vw;
      }

      .listBox {
        border-radius: 3.33vw;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        overflow: hidden;

        * {
          font-family: "Roboto", sans-serif;
        }

        .list {
          padding: 5.55vw;

          & > li {
            display: flex;
            flex-direction: column;
            gap: 5.55vw;
            padding-bottom: 6.66vw;

            &:nth-of-type(n + 2) {
              padding-top: 6.66vw;
              border-top: 1px solid #d9d9d9;
            }

            .topBar {
              display: flex;
              align-items: center;
              gap: 2.77vw;
              font-size: 4.44vw;

              img {
                width: 13.88vw;
                height: 13.88vw;
                border-radius: 50%;
                object-fit: cover;
              }
            }

            .dataList {
              display: flex;
              flex-direction: column;
              gap: 3.33vw;

              li {
                display: flex;
                justify-content: space-between;
                font-size: 3.88vw;

                .key {
                  font-weight: 600;
                }
              }
            }

            .unstakeBtn {
              height: 13.88vw;
              font-size: 5vw;
              font-weight: 500;
              color: #fff;
              border-radius: 3.33vw;
              background: #000;
            }
          }
        }
      }
    }
  }
`;

const PstakingBox = styled.section`
  padding: 60px 0 0 0;

  .contList {
    display: flex;
    flex-direction: column;
    gap: 44px;
    margin: 14px 0 0 0;

    & > li {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .contTitle {
        font-size: 18px;
      }

      .listBox {
        * {
          font-family: "Roboto", sans-serif;
        }
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        overflow: hidden;

        .listHeader {
          display: flex;
          align-items: center;
          height: 55px;
          padding: 0 20px;
          font-weight: 600;
        }

        .list {
          li {
            display: flex;
            align-items: center;
            height: 104px;
            padding: 0 20px;
            font-weight: 500;
            border-top: 1px solid #d9d9d9;
          }
        }

        .listHeader li,
        .list li span {
          display: flex;
          align-items: center;
          font-size: 18px;

          &:nth-of-type(1) {
            width: 288px;
            gap: 14px;

            img {
              width: 68px;
              height: 68px;
              border-radius: 50%;
              object-fit: cover;
            }
          }
          &:nth-of-type(2) {
            width: 220px;
          }

          &:nth-of-type(4) {
            width: 255px;
          }
        }
      }

      &.vaultsBox {
        .listBox {
          .listHeader li,
          .list li span {
            &:nth-of-type(3) {
              width: 255px;
            }

            &:nth-of-type(5) {
              flex: 1;
              justify-content: flex-end;

              button {
                width: 162px;
                height: 50px;
                font-size: 18px;
                font-weight: 600;
                border-radius: 12px;
                color: #fff;
                background: #000;
              }
            }
          }
        }
      }

      &.rewardBox {
        .listBox {
          .listHeader li,
          .list li span {
            &:nth-of-type(3) {
              width: 134px;
            }

            &:nth-of-type(4) {
              width: 298px;
            }

            &:nth-of-type(5) {
              flex: 1;
              justify-content: space-between;

              button {
                width: 162px;
                height: 50px;
                font-size: 18px;
                font-weight: 600;
                border-radius: 12px;
                color: #fff;
                background: #000;
              }
            }
          }
        }
      }
    }
  }
`;
