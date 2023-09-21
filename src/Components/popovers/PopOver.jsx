import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PopoverPositionedExample(props) {
  return (
    <OverlayTrigger
          trigger="click"
          key={'bottom'}
          placement={'bottom'}
          overlay={
            <Popover id={`popover-positioned-`}>
              <Popover.Header as="h3">{props.title}</Popover.Header>
              <Popover.Body>
                {props.body}
              </Popover.Body>
            </Popover>
          }
        >
         <span>
          {props.children}
         </span>
        </OverlayTrigger>
  );
}

export default PopoverPositionedExample;