import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TabSection from './TabSection';

const Banner = () => {


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

      


    return (
        <div className="my-4">
            <div
        className="hero h-[600px]"
        style={{ 
          backgroundImage:
            "url(https://i.ibb.co/q5X8WS6/eat-excel-2.jpg)",
            borderRadius: "10px"
        }}
      >
        <div className="hero-overlay rounded-lg bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex justify-center flex-col items-center">
            <h1 className="w-11/12 text-5xl font-bold mb-2">Empowering Hostel Life with Integrated Meal Solutions</h1>
            <p className="mb-5 w-6/12">
            Streamline hostel operations, enhance student well-being, and ensure a seamless dining experience with our all-in-one hostel management system, featuring a robust meal service module.
            </p>
            {/* search icon */}
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            className='w-96'
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            
          </div>
        </div>
      </div>
     <TabSection className="grid lg:grid-cols-3" ></TabSection>
    </div>
    );
};

export default Banner;