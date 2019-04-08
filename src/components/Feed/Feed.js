import React from "react";
import tagsIcon from "../../images/tags.svg";
import moreIcon from "../../images/more.svg";
// import likeIcon from "../../images/like.svg";
import likedIcon from "../../images/liked.svg";
import shareIcon from "../../images/share.svg";
import commentsIcon from "../../images/comments.svg";
import styles from "./Feed.module.css";
import closeBtn from "../../images/close-button.svg";
import CommentList from "../../components/CommentList/CommentList";
import emojiIcon from "../../images/faces.svg";
import albumIcon from "../../images/album.svg";

class Feed extends React.Component {
  state = {
    commentOverlayOpen: false
  };

  handleCommentOverlay = () => {
    this.setState(prevState => {
      return { commentOverlayOpen: !prevState.commentOverlayOpen };
    });
    console.log("done");
  };
  render() {
    let commentOverlay = this.state.commentOverlayOpen ? (
      <div className={styles.commentOverlay}>
        <div className={styles.header}>
          <p>comments</p>
          <img src={closeBtn} onClick={this.handleCommentOverlay} alt="close" />
        </div>
        <CommentList />
        <div className={styles.addComment}>
          <input type="text" placeholder="Write Comment" />
          <div>
            <img src={emojiIcon} alt="emoji" />
            <img src={albumIcon} alt="album" />
          </div>
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
            <img src={moreIcon} alt="More" />
          </div>
        </div>
        <div className={styles.contentText}>
          {/* write logic to render content based on its type; img, text, video, etc */}
          {this.props.content}
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
              <span className={styles.likeCount}>{this.props.likeCount}</span>{" "}
              <span className={styles.mark}>Likes</span>
            </span>
            <div className="controls">
              <button>
                <img src={likedIcon} alt="like" />
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
    );
  }
}

export default Feed;
