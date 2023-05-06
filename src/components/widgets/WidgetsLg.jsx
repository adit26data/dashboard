import "./WidgetsLg.css";
export default function WidgetsLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 May 2021</td>
                    <td className="widgetLgAmount">$1100.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/10665370/pexels-photo-10665370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Dana White</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$1250.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/5231184/pexels-photo-5231184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Helen Fifer</span>
                    </td>
                    <td className="widgetLgDate">2 July 2021</td>
                    <td className="widgetLgAmount">$1220.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/16160789/pexels-photo-16160789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Jennifer Kelly Hussain </span>
                    </td>
                    <td className="widgetLgDate">10 Jun 2021</td>
                    <td className="widgetLgAmount">$1002.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}