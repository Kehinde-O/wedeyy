import React from "react";
import tagsIcon from "../../images/tags.svg";
import moreIcon from "../../images/more.svg";
import likeIcon from "../../images/like.svg";
import likedIcon from "../../images/liked.svg";
import shareIcon from "../../images/share.svg";
import commentsIcon from "../../images/comments.svg";
import styles from "./Feed.module.css";
import Comments from "../Comments/Comments";
import Likes from "../Likes/Likes";
import playIcon from "../../images/play-button.svg";
import crossIcon from "../../images/cross.svg";
import downloadIcon from "../../images/download.svg";
import warningIcon from "../../images/warning.svg";
import linkIcon from "../../images/link.svg";

class Feed extends React.Component {
  state = {
    likeOverlayOpen: false,
    commentOverlayOpen: false,
    feedOverlayImage: false,
    feedOverlayVideo: false,
    menuClicked: false
  };

  handleCommentOverlay = () => {
    this.setState(prevState => {
      return { commentOverlayOpen: !prevState.commentOverlayOpen };
    });
  };

  handleLikeOverlay = () => {
    this.setState(prevState => {
      return { likeOverlayOpen: !prevState.likeOverlayOpen };
    });
  };

  handleMenuOpened = () => {
    this.setState({ menuClicked: true });
  };

  handleMenuClosed = () => {
    this.setState({ menuClicked: false });
  };

  stopEventPropagation = e => {
    e.stopPropagation();
  };

  static overlaySrc;

  openFeedOverlayImage = e => {
    this.setState({ feedOverlayImage: true });
    this.overlaySrc = e.currentTarget.src;
  };

  openFeedOverlayVideo = e => {
    console.log(e);
    this.setState({ feedOverlayVideo: true });
    this.overlaySrc = e.currentTarget.src;
  };

  closeFeedOverlay = () => {
    this.setState({ feedOverlayImage: false, feedOverlayVideo: false });
  };

  render() {
    let commentOverlay = this.state.commentOverlayOpen ? (
      <Comments click={this.handleCommentOverlay} />
    ) : null;

    let likeOverlay = this.state.likeOverlayOpen ? (
      <div>
        <Likes click={this.handleLikeOverlay} />
      </div>
    ) : null;

    let content;

    if (this.props.contentType === "textBackground") {
      content = (
        <div className={styles.contentText}>
          <div>
            <h2>{this.props.quote}</h2>
            <p>{this.props.author}</p>
          </div>
        </div>
      );
    } else if (this.props.contentType === "video") {
      content = (
        <div className={styles.contentVideo}>
          <video controls>
            <source src={this.props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            onClick={e => this.openFeedOverlayVideo(e)}
            className={styles.playIcon}
            src={playIcon}
            alt="play"
          />
        </div>
      );
    } else if (this.props.contentType === "image") {
      content = (
        <div className={styles.contentImage}>
          <img
            onClick={e => this.openFeedOverlayImage(e)}
            src={this.props.image}
            alt=""
          />
        </div>
      );
    } else if (this.props.contentType === "imageAd") {
      content = (
        <div className={styles.contentImageAd}>
          <img src={this.props.image} alt="" />
          <div className={styles.description}>
            <div className={styles.heading}>
              <p className={styles.text}>{this.props.text}</p>
              <button>{this.props.btnText}</button>
            </div>
            <span>{this.props.brand}</span>
          </div>
        </div>
      );
    } else if (this.props.contentType === "imageText") {
      content = (
        <div className={styles.contentImageText}>
          <img
            src={this.props.image}
            alt=""
            onClick={e => this.openFeedOverlayImage(e)}
          />
          <div className={styles.description}>
            <p>{this.props.caption}</p>
          </div>
        </div>
      );
    }

    let ImageOverlay = this.state.feedOverlayImage ? (
      <div className={styles.FeedOverlay}>
        <div className={styles.Header}>
          <div>
            <img src={this.props.avatar} alt="avatar" />
            <div className={styles.info}>
              <h3 className="user">{this.props.user}</h3>
              <span>
                {this.props.created}
                <span>
                  <img src={tagsIcon} alt="tags" />
                  {this.props.tags}
                </span>
              </span>
            </div>
            <svg
              onClick={this.handleMenuOpened}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="612px"
              height="612px"
              viewBox="0 0 612 612"
            >
              <g>
                <g>
                  <circle cx="69.545" cy="306" r="69.545" />
                  <circle cx="306" cy="306" r="69.545" />
                  <circle cx="542.455" cy="306" r="69.545" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.contentImageText}>
          <img src={this.overlaySrc} alt="" onClick={this.closeFeedOverlay} />
          {this.props.caption ? (
            <div className={styles.description}>
              <p>{this.props.caption}</p>
            </div>
          ) : null}
        </div>
        <div className={styles.footer}>
          <div className={styles.top}>
            <span>
              {this.props.reachCount} <span className={styles.mark}>Reach</span>
            </span>
            <div>
              <span>
                {this.props.shareCount}{" "}
                <span className={styles.mark}>Shares</span>
              </span>
              <span onClick={this.handleCommentOverlay}>
                {this.props.commentCount}{" "}
                <span className={styles.mark}>Comments</span>
              </span>
            </div>
          </div>
          <div className={styles.bottom}>
            <span>
              <span
                className={styles.likeCount}
                onClick={this.handleLikeOverlay}
              >
                {this.props.likeCount}
              </span>{" "}
              <span className={styles.mark}>Likes</span>
            </span>
            <div className="controls">
              <button>
                <img
                  src={this.props.liked === "1" ? likedIcon : likeIcon}
                  alt="like"
                />
              </button>
              <button>
                <img src={shareIcon} alt="share" />
              </button>
              <button>
                <img
                  src={commentsIcon}
                  alt="comments"
                  onClick={this.handleCommentOverlay}
                />
              </button>
            </div>
          </div>
        </div>
        {commentOverlay}
      </div>
    ) : null;

    let videoOverlay = this.state.feedOverlayVideo ? (
      <div className={styles.FeedOverlay}>
        <div className={styles.Header}>
          <div>
            <img src={this.props.avatar} alt="avatar" />
            <div className={styles.info}>
              <h3 className="user">{this.props.user}</h3>
              <span
                style={{
                  color: "#ffffff",
                  textShadow: "0 3px 6px rgba(0, 0, 0, 0.16)"
                }}
              >
                {this.props.created}
                <span
                  style={{
                    color: "#ffffff",
                    textShadow: "0 3px 6px rgba(0, 0, 0, 0.16)"
                  }}
                >
                  <img src={tagsIcon} alt="tags" />
                  {this.props.tags}
                </span>
              </span>
            </div>
            <svg
              onClick={this.handleMenuOpened}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="612px"
              height="612px"
              viewBox="0 0 612 612"
            >
              <g>
                <g>
                  <circle cx="69.545" cy="306" r="69.545" />
                  <circle cx="306" cy="306" r="69.545" />
                  <circle cx="542.455" cy="306" r="69.545" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.contentVideo} onClick={this.closeFeedOverlay}>
          <video id="background-video" autoPlay controls>
            <source src={this.props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    ) : null;

    return (
      <div className={styles.Feed}>
        <div className={styles.Header}>
          <div>
            <img src={this.props.avatar} alt="avatar" />
            <div className={styles.info}>
              <h3 className="user">{this.props.user}</h3>
              <span>
                {this.props.created}
                <span>
                  <img src={tagsIcon} alt="tags" />
                  {this.props.tags}
                </span>
              </span>
            </div>
            <img src={moreIcon} onClick={this.handleMenuOpened} alt="More" />
          </div>
        </div>
        {content}
        <div className={styles.footer}>
          <div className={styles.top}>
            <span>
              {this.props.reachCount} <span className={styles.mark}>Reach</span>
            </span>
            <div>
              <span>
                {this.props.shareCount}{" "}
                <span className={styles.mark}>Shares</span>
              </span>
              <span onClick={this.handleCommentOverlay}>
                {this.props.commentCount}{" "}
                <span className={styles.mark}>Comments</span>
              </span>
            </div>
          </div>
          <div className={styles.bottom}>
            <span>
              <span
                className={styles.likeCount}
                onClick={this.handleLikeOverlay}
              >
                {this.props.likeCount}
              </span>{" "}
              <span className={styles.mark}>Likes</span>
            </span>
            <div className="controls">
              <button>
                <img
                  src={this.props.liked === "1" ? likedIcon : likeIcon}
                  alt="like"
                />
              </button>
              <button>
                <img src={shareIcon} alt="share" />
              </button>
              <button>
                <img
                  src={commentsIcon}
                  alt="comments"
                  onClick={this.handleCommentOverlay}
                />
              </button>
            </div>
          </div>
        </div>
        {commentOverlay}
        {likeOverlay}
        {ImageOverlay}
        {videoOverlay}
        {this.state.menuClicked ? (
          <div className={styles.menu} onClick={this.handleMenuClosed}>
            <div className={styles.options} onClick={this.stopEventPropagation}>
              <div className={styles.option}>
                <img
                  src={crossIcon}
                  alt="cancel"
                  onClick={this.handleMenuClosed}
                />
                <span>Post Options</span>
              </div>
              <div className={styles.option}>
                <img src={warningIcon} alt="cancel" />
                <span>Report Post</span>
              </div>
              <div className={styles.option}>
                <img src={linkIcon} alt="cancel" />
                <span>Copy Post Link</span>
              </div>
              <div className={styles.option}>
                <img src={downloadIcon} alt="cancel" />
                <span>Save Post</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Feed;
