/* eslint-disable react/prop-types */

const ListItem = ({character, unicodeName}) => {

    const extractedName = unicodeName.split(' ').slice(1).join(' ');

    return (
        <li className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md mb-3 w-96">
            <span className="text-blue-500 mr-2 text-3xl">{character}</span>
            <span className="text-gray-600 text-lg">{extractedName}</span>
        </li>
    )
}

export default ListItem
