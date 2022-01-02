
const PropField = ({children,name}: any) => (
  <label className="App__label" htmlFor={name}>
    <span>{name}</span>
    {children}
  </label>
)

export const BoolPropField = ({value,...props}: any) => (
  <PropField name={props.name}>
    <input type="checkbox" id={props.name} checked={value} {...props} />
  </PropField>
)

export default PropField;
