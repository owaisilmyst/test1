import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Autocomplete, TextField, Icon, InputAdornment } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";
import styles from "../styles/index.module.css";

const Homepage: NextPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onGroup1Click = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularStaysForm']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.homepageDiv}>
          <div className={styles.heroSectionDiv}>
            <header className={styles.topHeader}>
              <div className={styles.topContainerDiv}>
                <img
                  className={styles.fickleflightLogoIcon}
                  alt=""
                  src="fickleflight-logo.svg"
                />
                <div className={styles.navigationRightDiv}>
                  <div className={styles.navigationMenuDiv}>
                    <div className={styles.exploreDiv}>Explore</div>
                    <div className={styles.searchDiv}>Search</div>
                    <div className={styles.searchDiv}>Hotels</div>
                    <div className={styles.searchDiv}>Offers</div>
                  </div>
                  <div className={styles.accountSectionDiv}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="notification.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="notification1.svg"
                    />
                    <img
                      className={styles.unsplashd1UPkiFd04AIcon}
                      alt=""
                      src="top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.searchSectionDiv}>
              <div className={styles.bannerGradientDiv} />
              <img
                className={styles.bannerBackground}
                alt=""
                src="banner--background@2x.png"
              />
              <div className={styles.searchContainerDiv}>
                <div className={styles.titleDiv}>
                  <div
                    className={styles.letsExploreTravelTheWor}
                  >{`Let’s explore & travel the world`}</div>
                  <div className={styles.findTheBestDestinationsAnd}>
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className={styles.searchFormDiv}>
                  <div className={styles.inputsRowDiv}>
                    <div className={styles.inputGroupDiv}>
                      <Autocomplete
                        className={styles.departureFieldAutocomplete}
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                    </div>
                    <div className={styles.inputGroupDiv}>
                      <Autocomplete
                        className={styles.departureFieldAutocomplete}
                        disablePortal
                        options={[
                          "Clark (CRK)",
                          "Launceston (LST)",
                          "Kalibo (KLO)",
                          "Colombo CMB",
                          "Melbourne (AVV)",
                          "Los Angeles (LA)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Arrival"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Los Angeles (LA)"
                        size="medium"
                      />
                    </div>
                    <div className={styles.inputGroupDiv}>
                      <div className={styles.departureFieldAutocomplete}>
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              variant="outlined"
                              size="medium"
                              renderInput={{ placeholder: "01/05/2022" }}
                              helperText=""
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonGroupDiv}>
                    <button
                      className={styles.searchFlightsButton}
                      onClick={onSearchFlightsButtonClick}
                    >
                      <div className={styles.buttonDiv}>Search flights</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContentsDiv}>
            <div className={styles.upcomingFlightSection}>
              <b className={styles.upcomingFlightB}>Upcoming Flight</b>
              <div className={styles.flightDetailsDiv}>
                <div className={styles.flightMainContainer}>
                  <div className={styles.toAndFrom}>
                    <div className={styles.fromDetailsDiv}>
                      <b className={styles.sINB}>SIN</b>
                      <div className={styles.singaporeDiv}>Singapore</div>
                    </div>
                    <div className={styles.durationDiv}>
                      <b className={styles.h55MB}>15H 55M</b>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="group-17.svg"
                      />
                    </div>
                    <div className={styles.toDetailsDiv}>
                      <b className={styles.lAXB}>LAX</b>
                      <div className={styles.losAngelesDiv}>Los Angeles</div>
                    </div>
                  </div>
                  <div className={styles.horizontalLineDiv} />
                  <div className={styles.departureDetailsDiv}>
                    <div className={styles.departsOn1May0800AM}>
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className={styles.daysToGo}>
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className={styles.lineSeparatorDiv} />
                <div className={styles.prepareMenuDiv}>
                  <div className={styles.prepareForYourTrip}>
                    Prepare for your trip
                  </div>
                  <div className={styles.tripMenusDiv}>
                    <button className={styles.hotelButton}>
                      <img
                        className={styles.groupDiv}
                        alt=""
                        src="group-21.svg"
                        onClick={onGroup1Click}
                      />
                      <div className={styles.hotelDiv}>Hotel</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div
                        className={styles.groupDiv}
                        onClick={onGroupContainerClick}
                      >
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.groupIcon2}
                          alt=""
                          src="group.svg"
                        />
                      </div>
                      <div className={styles.attractionsDiv}>Attractions</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <img
                        className={styles.groupIcon3}
                        alt=""
                        src="group-211.svg"
                      />
                      <div className={styles.attractionsDiv}>Eats</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.groupIcon3}>
                        <div className={styles.rectangleDiv1} />
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="vector.svg"
                        />
                      </div>
                      <div className={styles.attractionsDiv}>Commute</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.groupDiv2}>
                        <div className={styles.rectangleDiv2} />
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="vector1.svg"
                        />
                      </div>
                      <div className={styles.taxiDiv}>Taxi</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.groupIcon3}>
                        <div className={styles.rectangleDiv3} />
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="vector2.svg"
                        />
                      </div>
                      <div className={styles.attractionsDiv}>Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitlesDiv}>
                <div className={styles.titleContainerDiv}>
                  <b className={styles.prepareForYourTrip}>
                    Plan your next trip
                  </b>
                  <b className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </b>
                </div>
                <a className={styles.viewAllTop} href="#">
                  <div className={styles.viewAllDestinations}>
                    View all destinations
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="arrowright.svg"
                  />
                </a>
              </div>
              <div className={styles.cardsContainerDiv}>
                <button className={styles.card1Button}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.unsplashnnzkZNYWHaUIcon}
                      alt=""
                      src="unsplashnnzkznywhau@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Paris</b>
                      <div className={styles.groupDiv4}>
                        <div className={styles.div}>$699</div>
                        <div className={styles.fromDiv}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.card1Button}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.unsplashnnzkZNYWHaUIcon}
                      alt=""
                      src="unsplashyc8qqp50bda@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Greece</b>
                      <div className={styles.groupDiv5}>
                        <div className={styles.div1}>$1079</div>
                        <div className={styles.fromDiv1}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.card1Button}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.unsplashnnzkZNYWHaUIcon}
                      alt=""
                      src="unsplashltnpejwdsay@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Norway</b>
                      <div className={styles.groupDiv4}>
                        <div className={styles.div}>$895</div>
                        <div className={styles.fromDiv}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.card1Button}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.unsplashnnzkZNYWHaUIcon}
                      alt=""
                      src="unsplashm0oiyn5u8zm@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Tuscany</b>
                      <div className={styles.groupDiv7}>
                        <div className={styles.div3}>$1245</div>
                        <div className={styles.fromDiv3}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom}>
                <div className={styles.viewAllDestinations1}>
                  View all destinations
                </div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="arrowright1.svg"
                />
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitleDiv}>
                <b className={styles.recommendedHolidaysB}>
                  Recommended Holidays
                </b>
                <a className={styles.frameA} href="#">
                  <div className={styles.viewAllHolidays}>
                    View all holidays
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="arrowright2.svg"
                  />
                </a>
              </div>
              <div className={styles.recCardsContainerDiv}>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="unsplash5mv818tzxeo@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv5}>
                        <div className={styles.baliDiv}>Bali</div>
                        <div className={styles.d3NDiv}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$899</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="unsplashj82dskoxvy8@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv5}>
                        <div className={styles.baliDiv}>Switzerland</div>
                        <div className={styles.d3NDiv}>6D5N</div>
                      </div>
                      <div className={styles.div4}>$900</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard3}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="unsplash4ezkckxolre@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv5}>
                        <div className={styles.baliDiv}>Boracay</div>
                        <div className={styles.d3NDiv}>5D4N</div>
                      </div>
                      <div className={styles.div4}>$699</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard4}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="unsplashuyqmxhjr3ne@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv5}>
                        <div className={styles.baliDiv}>Palawan</div>
                        <div className={styles.d3NDiv}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom1}>
                <div className={styles.viewAllHolidays1}>View all holidays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="arrowright3.svg"
                />
              </div>
            </div>
            <form
              className={styles.popularStaysForm}
              data-scroll-to="popularStaysForm"
            >
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <b className={styles.popularStaysB}>Popular Stays</b>
                </div>
                <a className={styles.frameA1} href="#">
                  <div className={styles.viewAllStays}>View all stays</div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="arrowright2.svg"
                  />
                </a>
              </div>
              <div className={styles.hotelCardsDiv}>
                <div className={styles.hotelCard1}>
                  <div
                    className={styles.hotelCardDiv}
                    onClick={openMatterhornPopup}
                  >
                    <img
                      className={styles.unsplashHhRfsdWxXusIcon}
                      alt=""
                      src="unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className={styles.stayDetailsDiv}>
                      <div className={styles.titleContainerDiv}>
                        <div className={styles.entireBungalowDiv}>
                          Entire bungalow
                        </div>
                        <b className={styles.matterhornSuitesB}>
                          Matterhorn Suites
                        </b>
                        <div className={styles.nightDiv}>$575/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="video.svg"
                      />
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv}>(60 reviews)</div>
                      <div className={styles.groupDiv8}>
                        <div className={styles.div8}>4.9</div>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="vector3.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <a className={styles.hotelCard} href="#">
                    <img
                      className={styles.unsplashHhRfsdWxXusIcon}
                      alt=""
                      src="unsplashtsn8bpopveo@2x.png"
                    />
                    <div className={styles.stayDetailsDiv1}>
                      <div className={styles.titleContainerDiv}>
                        <div className={styles.entireBungalowDiv}>
                          2-Story beachfront suite
                        </div>
                        <b className={styles.matterhornSuitesB}>
                          Discovery Shores
                        </b>
                        <div className={styles.nightDiv}>$360/night</div>
                      </div>
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv}>(116 reviews)</div>
                      <div className={styles.groupDiv8}>
                        <div className={styles.div8}>4.8</div>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="vector4.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </a>
                </div>
                <div className={styles.hotelCard1}>
                  <a className={styles.hotelCard4} href="#">
                    <img
                      className={styles.unsplashHhRfsdWxXusIcon}
                      alt=""
                      src="unsplashrlwe8f8anoc1@2x.png"
                    />
                    <div className={styles.stayDetailsDiv1}>
                      <div className={styles.titleContainerDiv}>
                        <div className={styles.entireBungalowDiv}>
                          Single deluxe hut
                        </div>
                        <b className={styles.arcticHutB}>Arctic Hut </b>
                        <div className={styles.nightDiv}>$420/night</div>
                      </div>
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv2}>(78 reviews)</div>
                      <div className={styles.groupDiv10}>
                        <div className={styles.div10}>4.7</div>
                        <img
                          className={styles.vectorIcon5}
                          alt=""
                          src="vector5.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </a>
                </div>
                <div className={styles.hotelCard41}>
                  <a className={styles.hotelCard5} href="#">
                    <img
                      className={styles.unsplashHhRfsdWxXusIcon}
                      alt=""
                      src="unsplashyqrybvxug5q@2x.png"
                    />
                    <div className={styles.stayDetailsDiv}>
                      <div className={styles.titleContainerDiv}>
                        <div className={styles.entireBungalowDiv}>
                          Deluxe King Room
                        </div>
                        <b className={styles.arcticHutB}>Lake Louise Inn</b>
                        <div className={styles.nightDiv}>$244/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="video1.svg"
                      />
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv}>(63 reviews)</div>
                      <div className={styles.groupDiv8}>
                        <div className={styles.div8}>4.6</div>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="vector6.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </a>
                </div>
              </div>
              <div className={styles.frameDiv16}>
                <div className={styles.viewAllStays1}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="arrowright5.svg"
                />
              </div>
            </form>
          </div>
          <div className={styles.footerSectionDiv}>
            <div className={styles.frameDiv17}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="rectangle-186@2x.png"
              />
              <div className={styles.shareYourTravelsForm}>
                <div className={styles.formHeaderDiv}>
                  <b className={styles.prepareForYourTrip}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitleB}>Get weekly updates</b>
                </div>
                <form className={styles.form}>
                  <div className={styles.formTextDiv}>
                    <div className={styles.fillInYourDetailsToJoinT}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFieldsDiv}>
                    <div className={styles.formTextDiv}>
                      <TextField
                        className={styles.inputTextField}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className={styles.formTextDiv}>
                      <TextField
                        className={styles.inputTextField}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className={styles.button}>
                    <div className={styles.unstyledButtonDiv}>
                      <div className={styles.buttonDiv5}>submit</div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleFlightBioDiv}>
                <img
                  className={styles.fickleflightLogoIcon}
                  alt=""
                  src="logo.svg"
                />
                <div className={styles.fickleFlightIsYourOneStop}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="social-icons.svg"
                />
              </div>
              <div className={styles.lineDiv} />
              <div className={styles.footerLinksDiv}>
                <div className={styles.companyDiv}>
                  <a className={styles.aboutUs}>About Us</a>
                  <div className={styles.companyDiv1}>Company</div>
                  <div className={styles.newsDiv}>News</div>
                  <div className={styles.careersDiv}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.companyDiv}>
                  <div className={styles.accountDiv}>Account</div>
                  <div className={styles.supportDiv1}>Support</div>
                  <div className={styles.supportCenterDiv}>Support Center</div>
                  <div className={styles.fAQDiv}>FAQ</div>
                  <div className={styles.accessibilityDiv}>Accessibility</div>
                </div>
                <div className={styles.moreDiv}>
                  <div className={styles.covidAdvisoryDiv}>Covid Advisory</div>
                  <div className={styles.moreDiv1}>More</div>
                  <div className={styles.airlineFeesDiv}>Airline Fees</div>
                  <div className={styles.tipsDiv}>Tips</div>
                  <div className={styles.howWeWork}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
