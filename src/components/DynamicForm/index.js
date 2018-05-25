import React from 'react'
import ReactDOM from 'react-dom'

export default class DynamicForm extends React.Component {
    state = {

    }
    constructor(props) {
        super(props)
    }

    renderForm = () => {
        let model = this.props.model

        let formUI = model.map((m) => {
            let key = m.key
            let type = m.type || "text"
            let props = m.props || {}
            let placeholder = m.placeholder || ""

            return (
                <div key={key} className="w3-panel">
                    <label className="" key={"l" + m.key} htmlFor={m.key}>
                        {m.label}
                    </label>
                    <input {...props} ref={(key) => { this[m.key] = key }} className="w3-input w3-border w3-margin-bottom" type={type} placeholder={placeholder} key={"i" + m.key} onChange={(e) => { this.onChange(e, key) }}
                    />
                </div>
            )
        })
        return formUI
    }

    onChange = (e, key) => {
        this.setState({
            [key]: this[key].value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.props.onSubmit) this.props.onSubmit(this.state)
    }

    render() {

        return (
            <div className="w3-panel">
                <form className="dynamic-form" onSubmit={(e) => { this.onSubmit(e) }}>
                    {this.renderForm()}
                    <div className="w3-section">
                        <a className="w3-button w3-red" onClick={this.props.onClickClose}>Cancel  <i className="fa fa-remove"></i></a>
                        <button className="w3-button w3-light-grey w3-right" type="submit">Save <i className="fa fa-floppy-o"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}