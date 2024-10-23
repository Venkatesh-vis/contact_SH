import { IconButton } from "@mui/material"


const Btn = ({name,onClick,icon: Icon,style}) => {
    return(
        <button onClick={onClick} style={style}>
        {Icon && (
          <IconButton size="small" color="inherit">
            <Icon />
          </IconButton>
        )}
        {name}
      </button>
    )
}

export default Btn

