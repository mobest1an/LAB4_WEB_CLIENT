import useStore, {CheckType} from "../../../../bll/state/store";

const Area = (props: {checks: Array<CheckType>, onAreaClick: Function, checkHit: Function}) => {

    const r = useStore(state => state._r);

    return(
        <div style={{width: "300px", height: "300px"}}>
            <svg className="area" onClick={(e) => {
                props.onAreaClick(e)
            }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="path-0"
                          d="M 235.166 158.391 C 247.43 163.058 259.865 165.851 265.522 171.507 C 268.039 173.65 268.71 170.567 270.019 169.259 L 270.394 169.259 C 271.496 167.054 271.893 166.801 271.893 164.012"
                          style={{fill: "none"}}/>
                    <path id="path-1"
                          d="M 242.286 158.765 C 247.964 158.765 250.103 162.138 251.655 162.138 L 251.655 162.513"
                          style={{fill: "none"}}/>
                    <path id="path-2"
                          d="M 53.779 154.643 L 55.278 158.391 C 56.205 159.503 59.156 163.263 60.899 163.263"
                          style={{fill: "none"}}/>
                    <path id="path-3"
                          d="M 168.457 42.588 L 172.58 45.211 C 175.034 46.438 176.366 47.124 177.826 48.584"
                          style={{fill: "none"}}/>
                    <path id="path-4"
                          d="M 157.589 243.462 L 162.086 247.585 C 163.158 248.657 166.083 250.958 167.333 250.958"
                          style={{fill: "none"}}/>
                </defs>
                <path style={{fillOpacity: "0.6", fill: "rgb(47, 154, 255)"}}
                      transform="matrix(0, 0.488267, -0.488267, 0, 292.671631, -0.386225)"
                      d="M 103.194 292.2 A 204.806 204.806 0 0 1 308 87.394 L 308 292.2 Z"/>
                <rect x="150" y="150" width="50" height="100" style={{fillOpacity: "0.6", fill: "rgb(47, 154, 255)"}}/>
                <path d="M 19.119 23.724 L 69.119 73.724 L 19.119 73.724 L 19.119 23.724 Z"
                      style={{fillOpacity: "0.6", fill: "rgb(47, 154, 255)"}}
                      transform="matrix(-1, 0.000035, -0.000035, -1, 169.121582, 223.723328)"/>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, 58.462498, 104.84375)">
                    <tspan x="187.945" y="39.215">R</tspan>
                    <tspan x="187.945" dy="1em">​</tspan>
                </text>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, -32.9375, 14.443749)">
                    <tspan x="187.945" y="39.215">R</tspan>
                    <tspan x="187.945" dy="1em">​</tspan>
                </text>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, -143.237503, 104.84375)">
                    <tspan x="187.945" y="39.215">-R</tspan>
                    <tspan x="187.945" dy="1em">​</tspan>
                </text>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, -32.9375, 214.443741)">
                    <tspan x="187.945" y="39.215">-R</tspan>
                    <tspan x="187.945" dy="1em">​</tspan>
                </text>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="147" y1="200" x2="153" y2="200.001"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="97" y1="150" x2="103" y2="150"
                      transform="matrix(0, 1, -1, 0, 250, 50)"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="147" y1="100" x2="153" y2="100.001"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="247" y1="150" x2="253" y2="150"
                      transform="matrix(0, 1, -1, 0, 400, -100)"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="197" y1="150" x2="203" y2="150"
                      transform="matrix(0, 1, -1, 0, 350, -50)"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="150" y1="25" x2="150" y2="275"
                      transform="matrix(0, 1, -1, 0, 300, 0)"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="147" y1="250" x2="153" y2="250"
                      transform="matrix(1, 0, 0, 1, 0.000102, -0.000061)"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="150" y1="25" x2="150" y2="275"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="147" y1="50" x2="153" y2="50.001"/>
                <line style={{stroke: "rgb(0, 0, 0)", strokeOpacity: "0.6"}} x1="47" y1="150" x2="53" y2="150"
                      transform="matrix(0, 1, -1, 0, 200, 100)"/>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, -32.9375, 64.521873)">
                    <tspan x="187.945" y="39.215">R/2</tspan>
                    <tspan x="187.94500732421875" dy="1em">​</tspan>
                </text>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, 4.2625, 104.921875)">
                    <tspan x="187.945" y="39.215">R/2</tspan>
                    <tspan x="187.94500732421875" dy="1em">​</tspan>
                </text>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, -32.9375, 164.453125)">
                    <tspan x="187.945" y="39.215">-R/2</tspan>
                    <tspan x="187.94500732421875" dy="1em">​</tspan>
                </text>
                <text style={{fill: "rgb(51, 51, 51)", fontFamily: "Arial, sans-serif", fontSize: "10px", whiteSpace: "pre"}}
                      transform="matrix(1, 0, 0, 1, -97.4375, 104.953125)">
                    <tspan x="187.945" y="39.215">-R/2</tspan>
                    <tspan x="187.94500732421875" dy="1em">​</tspan>
                </text>

                {
                    props.checks.map(function (check) {
                        let x = check.x / Number(r) * 100 + 150;
                        let y = 150 - check.y / Number(r) * 100;
                        let isHit = props.checkHit(check);
                        if (isHit) {
                            return <circle cx={x} cy={y} r={"3"} fill={"green"}/>
                        } else {
                            return <circle cx={x} cy={y} r={"3"} fill={"red"}/>
                        }
                    })
                }
            </svg>
        </div>
    );
}

export default Area;
