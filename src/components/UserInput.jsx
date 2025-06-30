export default function UserInput({changeOn, userInput}) {
    // interactive user input and on change
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number"
                        required 
                        value={userInput.initialInvestment}
                        onChange={e => changeOn('initialInvestment', e.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.annualInvestment}
                        onChange={e => changeOn('annualInvestment', e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.expectedReturn}
                        onChange={e => changeOn('expectedReturn', e.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.duration}
                        onChange={e => changeOn('duration', e.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}