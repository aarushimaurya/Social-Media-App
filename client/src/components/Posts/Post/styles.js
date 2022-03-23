import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme)=>({
  media: {
    
    height: 100,
    paddingTop: '56.25%',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  /*overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },*/
  overlay: {
    position: 'absolute',
    top: '10px',
    right: '5px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2px 15px ',
  },
  name: {
    /*display: 'inline-block'*/
    display: 'flex',
    marginTop: '15px',
    marginLeft: '15px',
    marginBottom: '25px',
  },
  user: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 0px 0px 5px',
  },
  dp: {
    width: '24px',
    height: '24px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  time: {
    float: 'right',
    justifyContent: 'end',
    padding: '2px 0px 0px 100px'
  }, 
  cardActions: {
    padding: '0 16px 8px 10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));