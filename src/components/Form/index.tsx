import { CheckBox } from './Checkbox'
import { Input } from './Input'
import { Root } from './Root'
import { SubmitButton } from './SubmitButton'
import { Title } from './Title'
import { memoHOC } from './memoHOC'

export const Form = {
  Input: memoHOC(Input),
  Root,
  Title,
  CheckBox: memoHOC(CheckBox),
  SubmitButton,
}
