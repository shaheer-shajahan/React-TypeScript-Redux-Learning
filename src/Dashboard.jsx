import dashboardStats from "./data/dashboard";

function Dashboard() {
    return(
        <div>
            <h4>Dashboard content</h4>
            <h5>Welcome back, Shaheer</h5>

            <table className="">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {dashboardStats.map(item => (
                    <tr key={item}>
                        <td>{item.title}</td>
                        <td>{item.value}</td>
                        
                    </tr>
                    ))}
                </tbody>
                
            </table>

            <hr /><hr />
        </div>
    )
}

export default Dashboard;

