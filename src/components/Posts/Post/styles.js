import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
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
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '15px',
  },
  user: {
    padding: '0px 0px 0px 10px'
  },
  dp: {
    width: '24px',
    height: '24px'
  },
  time: {
    padding: '3px 0px 0px 140px',
  }, 
  cardActions: {
    padding: '0 16px 8px 10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});