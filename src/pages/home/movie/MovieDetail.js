import { useEffect, useRef, useState } from "react";
import requests from "../../../utils/movieApi";
import {
  AboutMovie,
  Age,
  BottomCard,
  Cast,
  CloseIcon,
  Company,
  Container,
  Desc,
  DescCard,
  Genre,
  GenreList,
  Genres,
  HDIcon,
  Hero,
  Icon,
  Info,
  Left,
  MaturityRating,
  ModalContent,
  ModalFooter,
  ModalFooterContent,
  MovieCard,
  MovieInfo,
  MovieInfoTop,
  MovieList,
  MyAddIcon,
  MyModal,
  Picture,
  PlayIcon,
  Rating,
  Right,
  SubIcon,
  SuggestMovie,
  TagLine,
  Text,
  Time,
  Title,
  TopCard,
  Year,
} from "./MovieDetail.style";
import MovieBanner from "./banner/MovieBanner";
import { DateFormat, TimeFormat } from "../../../utils/stringHelper";
import { Blank } from "./banner/MovieBanner.styled";
function MovieDetail({ handleClose, show, movie, list, handleOnClickMovie }) {
  const [trailer, setTrailer] = useState([]);
  const [casts, setCasts] = useState([]);
  const [sameMovie, setSameMovie] = useState([]);
  const getMovieDetail = async () => {
    const videos = await requests.movieVideos(movie?.id);
    const trailerId = videos.data.results?.find(
      (video) => video.type === "Trailer"
    ).key;
    setTrailer(trailerId);
  };

  const modalRef = useRef(null);

  const handleScrollToTop = () => {
    modalRef.current?.scrollTo({ x: 0, y: 0, animated: false });
  };
  const trailerURL = `https://www.youtube.com/watch?v=${trailer}`;
  console.log(movie);
  const getMovieCredit = async () => {
    const credit = await requests.getMovieCredit(movie?.id);
    console.log(credit);
    setCasts(credit?.data.cast.slice(0, 3));
  };

  const getMovieSimilar = async () => {
    const listMovie = await requests.getMovieSimilar(movie?.id);
    console.log(listMovie);
    setSameMovie(listMovie?.data.results);
  };
  useEffect(() => {
    if (movie?.id) {
      getMovieDetail();
      getMovieCredit();
      getMovieSimilar();
    }
  }, [show]);

  let listGenreById = {};
  list.map((genre) => {
    return (listGenreById[genre.id] = genre.name);
  });

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <MyModal
        open={show}
        title={<MovieBanner movie={movie} url={trailerURL} trailer={trailer} />}
        onCancel={handleClose}
        closeIcon={<CloseIcon />}
        footer={null}
      >
        <Container>
          <ModalContent ref={modalRef}>
            <Left>
              <MovieInfoTop>
                <Rating>
                  Rating {Math.round(movie?.vote_average * 10) / 10}
                </Rating>
                <Year>{DateFormat(movie?.release_date)}</Year>
                <Time>{TimeFormat(movie?.runtime)}</Time>
                <HDIcon />
                <SubIcon />
              </MovieInfoTop>
              <GenreList>
                <Age>{movie?.adult ? "18+" : "16+"}</Age>
                {movie?.genres.map((genre) => {
                  return <Genre>{listGenreById[genre.id]}</Genre>;
                })}
              </GenreList>
              <TagLine>"{movie?.tagline}"</TagLine>
              <Desc>{truncate(movie?.overview, 150)}</Desc>
            </Left>
            <Right>
              <Cast>
                <Title>Cast: </Title>
                {casts.map((cast) => {
                  return <Text>{cast?.name},</Text>;
                })}
              </Cast>
              <Genres>
                <Title>Genre:</Title>
                {movie?.genres.map((genre) => {
                  return <Text>{listGenreById[genre.id]},</Text>;
                })}
              </Genres>
            </Right>
          </ModalContent>
          <SuggestMovie>
            <Hero>More Like This</Hero>
            <MovieList>
              {sameMovie.map((item) => {
                if (item?.vote_average > 0) {
                  return (
                    <MovieCard onClick={(e) => handleOnClickMovie(e, item.id)}>
                      <TopCard>
                        <Icon className="icon">
                          <PlayIcon />
                        </Icon>
                        <Picture
                          src={`https://image.tmdb.org/t/p/original/${
                            item?.backdrop_path || item?.poster_path
                          }`}
                          alt="movie"
                        />
                      </TopCard>
                      <BottomCard>
                        <h3>
                          {truncate(item?.title || item?.original_title, 20)}
                        </h3>
                        <MovieInfo>
                          <div>
                            <Rating>
                              Rating {Math.round(item?.vote_average * 10) / 10}
                            </Rating>
                            <Info>
                              <Age>{item?.adult ? "18+" : "16+"}</Age>
                              <Year>{DateFormat(item?.release_date)}</Year>
                            </Info>
                          </div>
                          <div>
                            <MyAddIcon />
                          </div>
                        </MovieInfo>
                        <DescCard>{truncate(item?.overview, 100)}</DescCard>
                      </BottomCard>
                    </MovieCard>
                  );
                }
                return;
              })}
            </MovieList>
          </SuggestMovie>
          <ModalFooter>
            <AboutMovie>
              About <span>{movie?.title || movie?.original_title}</span>
            </AboutMovie>
            <ModalFooterContent>
              <Company>
                <Title>Companies: </Title>
                {movie?.production_companies.map((company) => {
                  return <Text>{company.name},</Text>;
                })}
              </Company>
              <Cast>
                <Title>Cast: </Title>
                {casts.map((cast) => {
                  return <Text>{cast?.name},</Text>;
                })}
              </Cast>
              <Genres>
                <Title>Genre: </Title>
                {movie?.genres.map((genre) => {
                  return <Text>{listGenreById[genre.id]},</Text>;
                })}
              </Genres>
              <MaturityRating>
                <Title>Maturity rating:</Title>
                <Blank />
                <div>
                  <Age>{movie?.adult ? "18+" : "16+"}</Age>
                  <Text>
                    {movie?.adult
                      ? "Recommended for ages 18 and up"
                      : "Recommended for ages 16 and up"}
                  </Text>
                </div>
              </MaturityRating>
            </ModalFooterContent>
          </ModalFooter>
          <button onClick={handleScrollToTop}>ok</button>
        </Container>
      </MyModal>
    </>
  );
}
export default MovieDetail;
