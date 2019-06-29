import styled from "vue-styled-components"
import Vue from "vue"

const StyledButton = styled.div`
  background-position: center;
  border-radius: 0.25rem;
  border: 1px #e91e63 solid;
  color: #e91e63;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0.375rem;
  padding: 0.5rem 0.75rem;
  text-align: center;
  transition: background 0.8s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;

  :hover {
    color: #fff;
    background: #e91e63 radial-gradient(circle, transparent 1%, #e91e63 1%)
      center/15000%;
  }

  :active {
    background-color: #fff;
    background-size: 100%;
    transition: background 0s;
  }
`

const Button = Vue.extend({
  render() {
    return (
      <StyledButton
        className={this.className || "default"}
        onClick={() => {
          this.$emit("action")
        }}
      >
        {this.label}
      </StyledButton>
    )
  },
  props: {
    className: { type: String, default: "" },
    label: { type: String, default: "" }
  }
})

export default Button
