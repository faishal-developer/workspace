import React, {Component} from 'react';
import './passwordStrengthMeter.scss';
import zxcvbn from 'zxcvbn';


class PasswordStrengthMeter extends Component {
    constructor() {
        super();
        this.state = {
            strengthClass: 'weak',
        }
    }

    createPasswordLabel = (result) => {
        let a = '';
        switch (result.score) {
            case 0:
                this.state.strengthClass = 'weak';
                return 'Weak';
            case 1:
                this.state.strengthClass = 'weak';
                return 'Weak';
            case 2:
                this.state.strengthClass = 'fair';
                return 'Fair';
            case 3:
                this.state.strengthClass = 'good';
                return 'Good';
            case 4:
                this.state.strengthClass = 'strong';
                return 'Strong';
            default:
                this.state.strengthClass = 'weak'
                return 'Weak';
        }
    }

    render() {
        const {password} = this.props;
        const testedResult = zxcvbn(password);
        return (
            <div className="password-strength-meter">
                <progress
                    className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
                    value={testedResult.score}
                    max="4"
                />
                <br/>
                <label
                    className="password-strength-meter-label"
                >
                    {password && (
                        <>
                            <strong>Password strength:</strong> <span className={this.state.strengthClass}>{this.createPasswordLabel(testedResult)}</span>
                        </>
                    )}
                </label>
            </div>
        );
    }
}

export default PasswordStrengthMeter;
