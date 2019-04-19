import React from "react";
import styles from "./Feeds.module.css";
import HeritageHeader from "../../components/HeritageHeader/HeritageHeader";
import PostBar from "../../components/PostBar/PostBar";
import TrendingList from "../../components/TrendingList/TrendingList";
import FeedNotification from "../../components/FeedNotification/FeedNotification";
import Feed from "../../components/Feed/Feed";
import starIcon from "../../images/star.svg";
import tetheringIcon from "../../images/tethering.svg";
import collectionsIcon from "../../images/collections.svg";
import SuggestionList from "../../components/SuggestionList/SuggestionList";
import DateMatchList from "../../components/DateMatchList/DateMatchList";
import video from "../../videos/live.mp4";
import feedImg from "../../images/feed-image.jpg";
import closeIcon from "../../images/close-button.svg";
import wedeyyBg0 from "../../images/post-background.jpg";
import wedeyyBg1 from "../../images/post-background1.png";
import wedeyyBg2 from "../../images/post-background2.png";
import wedeyyBg3 from "../../images/post-background3.png";
import wedeyyBg4 from "../../images/post-background4.png";
import pictureBg0 from "../../images/picturebg.jpg";
import pictureBg1 from "../../images/picturebg1.jpg";
import pictureBg2 from "../../images/picturebg2.jpg";
import pictureBg3 from "../../images/picturebg3.jpg";
import cameraIcon from "../../images/camera.svg";
import videocamIcon from "../../images/videocam.svg";
import quoteIcon from "../../images/quotes.svg";

class Feeds extends React.Component {
  state = {
    startUpload: false,
    selectedBackgrounds: [],
    wedeyyBackgrounds: [wedeyyBg0, wedeyyBg1, wedeyyBg2, wedeyyBg3, wedeyyBg4],
    pictureBackgrounds: [pictureBg0, pictureBg1, pictureBg2, pictureBg3]
  };

  startUpload = () => {
    this.setState({ startUpload: true });
  };

  cancelUpload = () => {
    this.setState({ startUpload: false });
  };

  handleSelection = e => {
    let selectedBackgrounds;
    if (e.currentTarget.innerHTML === "Wedeyy Background") {
      e.currentTarget.nextSibling.classList.remove(styles.active);
      e.currentTarget.classList.add(styles.active);
      selectedBackgrounds = this.state.wedeyyBackgrounds.map(background => {
        return (
          <img
            onClick={e => this.handleBackgroundChange(e)}
            key={background}
            src={background}
            alt=""
          />
        );
      });
    }
    if (e.currentTarget.innerHTML === "Picture Background") {
      e.currentTarget.previousSibling.classList.remove(styles.active);
      e.currentTarget.classList.add(styles.active);
      selectedBackgrounds = this.state.pictureBackgrounds.map(background => {
        return (
          <img
            onClick={e => this.handleBackgroundChange(e)}
            key={background}
            src={background}
            alt=""
          />
        );
      });
    }
    this.setState({ selectedBackgrounds: selectedBackgrounds });
  };

  handleBackgroundChange = e => {
    let newBackgroundSrc = e.currentTarget.src;
    let canvas = document.getElementsByClassName(styles.canvas)[0];
    canvas.firstChild.src = newBackgroundSrc;
  };

  render() {
    let uploadOverlay = this.state.startUpload ? (
      <div className={styles.uploadOverlay}>
        <div className={styles.header}>
          <h2>Create Elders Say Post</h2>
          <img src={closeIcon} alt="close" onClick={this.cancelUpload} />
        </div>
        <p className={styles.next}>Next</p>
        <div className={styles.canvas}>
          <img src={wedeyyBg1} alt="" />
          <textarea maxLength="100" placeholder="Text goes here" />
        </div>
        <div className={styles.footer}>
          <div className={styles.backgroundType}>
            <p onClick={e => this.handleSelection(e)} className={styles.active}>
              Wedeyy Background
            </p>
            <p onClick={e => this.handleSelection(e)}>Picture Background</p>
          </div>
          <div className={styles.backgrounds}>
            {this.state.selectedBackgrounds.length
              ? this.state.selectedBackgrounds
              : this.state.wedeyyBackgrounds.map(background => {
                  return (
                    <img
                      onClick={e => this.handleBackgroundChange(e)}
                      key={background}
                      src={background}
                      alt=""
                    />
                  );
                })}
          </div>
          <div className={styles.uploadType}>
            <div>
              <img src={cameraIcon} alt="" />
              <p>Post Photo</p>
            </div>
            <div>
              <img src={videocamIcon} alt="" />
              <p>Post Video</p>
            </div>
            <div>
              <img src={quoteIcon} alt="" />
              <p>Create Elders Say</p>
            </div>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <div className={styles.Feeds}>
        <HeritageHeader />
        <PostBar avatar="http://i.pravatar.cc/100" click={this.startUpload} />
        <TrendingList />
        <FeedNotification
          image={starIcon}
          heading="You just earned a Star."
          text="Start Family Tree to earn another."
          btnText="Go to Tree"
          target="/profile/tree"
        />
        <Feed
          avatar="http://i.pravatar.cc/100"
          user="John Doe"
          created="Feb 10 at 01:11 PM"
          tags={8}
          image={feedImg}
          reachCount="15k"
          contentType="image"
          likeCount={77}
          shareCount={5}
          commentCount={10}
        />
        <DateMatchList />
        <Feed
          avatar="http://i.pravatar.cc/101"
          user="John Doe"
          created="Feb 10 at 01:11 PM"
          tags={8}
          quote="The best way to eat an elephant in your path is cut him up into
              little pieces.|"
          author="Says: Swetaleena Dash."
          reachCount="15k"
          contentType="textBackground"
          likeCount={77}
          shareCount={5}
          commentCount={10}
        />
        <SuggestionList />
        <Feed
          avatar="http://i.pravatar.cc/102"
          user="John Doe"
          created="Feb 10 at 01:11 PM"
          tags={8}
          text="The new Apple Pro Laptop core i8 9th Generation."
          brand="Apple Inc."
          btnText="BUY NOW"
          reachCount="15k"
          contentType="imageAd"
          image="http://i.pravatar.cc/401"
          likeCount={77}
          shareCount={5}
          commentCount={10}
        />
        <Feed
          avatar="http://i.pravatar.cc/102"
          user="John Doe"
          created="Feb 10 at 01:11 PM"
          tags={8}
          video={video}
          reachCount="15k"
          contentType="video"
          likeCount={77}
          shareCount={5}
          commentCount={10}
        />
        <FeedNotification
          image={collectionsIcon}
          heading="Your Memories on Wedeyy."
          text="Femi, we care about you and others do too. We thought you might look back on today with your family friend, Kehinde Omotoso."
          btnText="View Memories."
        />
        <Feed
          avatar="http://i.pravatar.cc/103"
          user="John Doe"
          created="Feb 10 at 01:11 PM"
          tags={8}
          image={feedImg}
          caption="Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. Fusce at egestas libero. Cras convallis egestas ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum at massa dui. Morbi et purus velit. Etiam tristique, justo eu condimentum efficitur, purus velit facilisis sem, id fringilla tortor quam quis dolor. Praesent ultricies dignissim ex, at volutpat sapien ullamcorper rhoncus. Curabitur quam velit, ullamcorper ut congue eget, convallis et velit. Donec placerat, magna eu venenatis tempus, dui sapien aliquam libero, sit amet maximus erat massa quis nisi. Integer pharetra auctor arcu, non tincidunt dui fermentum ut. Nullam interdum sapien id mauris dapibus, a pharetra purus rhoncus. Nullam viverra iaculis tristique. Donec quis mauris ipsum. Nunc vehicula magna at erat tristique rutrum."
          reachCount="15k"
          contentType="imageText"
          likeCount={77}
          shareCount={5}
          commentCount={10}
        />
        <FeedNotification
          image={tetheringIcon}
          heading="Kehinde is LIVE."
          text="Join Kehinde and 200 others on his live broadcast. Make live contribution to the ongoing event."
          btnText="Join Broadcast"
          btnColor="#C44F4F"
          target="/broadcast"
        />
        {uploadOverlay}
      </div>
    );
  }
}

export default Feeds;
