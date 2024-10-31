export default function Products() {
    const make = [
        {
            id:1,
            name: 'DAF',
        },
        {
            id:2,
            name: 'Iveco',
        },
        {
            id:3,
            name: 'MAN',
        },
        {
            id:4,
            name: 'Mercedes Benzs',
        },
        {
            id:5,
            name: 'Renault',
        },
        {
            id:6,
            name: 'Scania',
        },
        {
            id:7,
            name: 'Volvo',
        }
    ]
    return (
        <div className="mx-auto flex max-w-7xl flex-wrap lg:flex-nowrap items-start justify-between p-6 lg:px-8 bg-gray-50 min-h-screen">
            {/* Sidebar */}
            <div className="hidden min-w-[250px] border-r border-gray-300 lg:flex flex-col sticky top-24 p-4">
                <h3 className="font-semibold mb-4 text-xl">Filter Products</h3>
                {/* Add your filter options here */}
                <h4 className="mb-4 font-semibold text-lg">Make</h4>
                {make.map((m) => (
                    <div key={m.id} className="flex items-center mb-2 text-normal">
                        <input type="checkbox" className="mr-2 cursor-pointer" />
                        <p>{m.name}</p>
                    </div>
                ))}

                <h4 className="my-4 font-semibold">Models</h4>

                {make.map((m) => (
                    <div key={m.id} className="flex items-center mb-2 text-normal">
                        <input type="checkbox" className="mr-2 cursor-pointer" />
                        <p>{m.name}</p>
                    </div>
                ))}

            </div>

            {/* Main Content */}
            <div className="flex-1 w-full p-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2lx:grid-cols-4 gap-4">

                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                    <div className="p-4 bg-white rounded shadow">m</div>
                </div>
            </div>
        </div>
    );
}
