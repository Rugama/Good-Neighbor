import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, SafeAreaView, Keyboard, TextInput, Vibration, ScrollView, Dimensions, FlatList, Linking} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = props => {
	
	const [school, setSchool] = useState([
		{
			coordinate: {
				latitude: 34.062370,
				longitude: -118.171600
			},
			title: 'CSULA',
			description: "Address: 5151 State University Drive, Los Angeles, CA, 90032",
			address: '5151 State University Drive, Los Angeles, CA, 90032',
			id: '0'
		}
	]);
	
	const [markers, setMarkers] = useState([
		{
			coordinate: {
				latitude: 34.0197123,
				longitude: -118.1063082
			},
			title: 'Goodwill',
			description: "Address: 820 W Beverly Blvd, Montebello, CA 90640",
			address: '820 W Beverly Blvd, Montebello, CA 90640',
			phoneNumber: '(323) 558-5294',
			id: '1'
		},
		{
			coordinate: {
				latitude: 34.078090,
				longitude: -118.222510
			},
			title: 'Goodwill',
			description: 'Address: 310 N San Fernando Rd, Los Angeles, CA 90031',
			address: '310 N San Fernando Rd, Los Angeles, CA 90031',
			phoneNumber: '(323) 987-2267',
			id: '2'
		},
		{
			coordinate: {
				latitude: 34.025980,
				longitude: -118.277460
			},
			title: 'Goodwill',
			description: 'Address: 2823 S Figueroa St, Los Angeles, CA 90007',
			address: '2823 S Figueroa St, Los Angeles, CA 90007',
			phoneNumber: '(213) 746-3964',
			id: '3'
		},
		{
			coordinate: {
				latitude: 34.130230,
				longitude: -118.073320
			},
			title: 'Goodwill',
			description: 'Address: 8996 Huntington Dr, San Gabriel, CA 91775',
			address: '8996 Huntington Dr, San Gabriel, CA 91775',
			phoneNumber: '(626) 291-5364',
			id: '4'
		},
		{
			coordinate: {
				latitude: 34.135689,
				longitude: -118.148010
			},
			title: 'Goodwill',
			description: 'Address: 112 E California Blvd, Pasadena, CA 91105',
			address: '112 E California Blvd, Pasadena, CA 91105',
			phoneNumber: '(626) 449-3721',
			id: '5'
		},
		{
			coordinate: {
				latitude: 33.9773191,
				longitude: -118.3901035
			},
			title: 'Goodwill',
			description: 'Address: 1500 W 6th St, Los Angeles, CA 90017',
			address: '1500 W 6th St, Los Angeles, CA 90017',
			phoneNumber: '(213) 201-1290',
			id: '6'
		},
		{
			coordinate: {
				latitude: 33.892620,
				longitude: -118.288270
			},
			title: 'Goodwill',
			description: 'Address: 727 W Redondo Beach Blvd, Gardena, CA 90247',
			address: '727 W Redondo Beach Blvd, Gardena, CA 90247',
			phoneNumber: '(310) 323-2173',
			id: '7'
		},
		{
			coordinate: {
				latitude: 34.019270,
				longitude: -118.335100
			},
			title: 'Goodwill',
			description: 'Address: 3726 Crenshaw Blvd, Los Angeles, CA 90016',
			address: '3726 Crenshaw Blvd, Los Angeles, CA 90016',
			phoneNumber: '(323) 293-1039',
			id: '8'
		},
		{
			coordinate: {
				latitude: 34.093109,
				longitude: -118.326057
			},
			title: 'Goodwill',
			address: '1218 Vine St, Los Angeles, CA 90038',
			phoneNumber: '(323) 469-2357',
			id: '9'
		},
		{
			coordinate: {
				latitude: 34.048420,
				longitude: -118.435380
			},
			title: 'Goodwill',
			description: 'Address: 1894 N Westwood Blvd, Los Angeles, CA 90025',
			address: '1894 N Westwood Blvd, Los Angeles, CA 90025',
			phoneNumber: '(310) 441-2740',
			id: '10'
		},
		{
			coordinate: {
				latitude: 34.059930,
				longitude: -118.344960
			},
			
			title: 'Goodwill',
			description: 'Address: 817 South La Brea Ave, Los Angeles, CA 90036',
			address: '817 South La Brea Ave, Los Angeles, CA 90036',
			phoneNumber: '(323) 931-5239',
			id: '11'
		},
		{
			coordinate: {
				latitude: 33.917760,
				longitude: -118.133380
			},
			title: 'Goodwill',
			description: 'Address: 9131-D, Imperial Hwy, Downey, CA 90242',
			address: '9131-D, Imperial Hwy, Downey, CA 90242',
			phoneNumber: '(562) 803-5392',
			id: '12'
		},
		{
			coordinate: {
				latitude: 33.944470,
				longitude: -118.205480
			},
			
			title: 'Goodwill',
			description: 'Address: 3637 Tweedy Blvd, South Gate, CA 90280',
			address: '3637 Tweedy Blvd, South Gate, CA 90280',
			phoneNumber: '(323) 374-6263',
			id: '13'
		},
		{
			coordinate: {
				latitude: 34.169030,
				longitude: -118.342570
			},
			title: 'Goodwill',
			description: 'Address: 3226 W Magnolia Blvd, Burbank, CA 91505',
			address: '3226 W Magnolia Blvd, Burbank, CA 91505',
			phoneNumber: '(818) 940-3015',
			id: '14'
		},
		{
			coordinate: {
				latitude: 34.100100,
				longitude: -118.289430
			},
			title: 'Goodwill',
			description: 'Address: 4575 Hollywood Blvd, Los Angeles, CA 90027',
			address: '4575 Hollywood Blvd, Los Angeles, CA 90027',
			phoneNumber: '(323) 644-1517',
			id: '15'
		},
		{
			coordinate: {
				latitude: 33.913470,
				longitude: -118.082320
			},
			title: 'Goodwill',
			description: 'Address: 12827 Pioneer Blvd, Norwalk, CA 90650',
			address: '12827 Pioneer Blvd, Norwalk, CA 90650',
			phoneNumber: '(562) 864-0662',
			id: '16'
		},
		{
			coordinate: {
				latitude: 33.91243,
				longitude: -118.3533
			},
			title: 'Goodwill',
			description: 'Address: 13245 Hawthorne Blvd, Hawthorne, CA 90250',
			address: '13245 Hawthorne Blvd, Hawthorne, CA 90250',
			phoneNumber: '(424) 269-3577',
			id: '17'
		}
	]);
	
	const renderItem = ({ item }) => (
		<View style = {styles.cardContainer}>
			<Text style = {styles.text}> 
				{item.id}) {item.address} {'\n'}
				{'\t'} Phone Number: {item.phoneNumber}
			</Text>
			<Text/>
		</View>
	)
	return (
		<SafeAreaView style = {styles.safeAreaView}>
			<View style = {styles.headerContainer}>
				<Text style = {styles.headerText}> Goodwill Donation Centers Near CSULA </Text>
				<Text/>
				<Text style = {styles.subHeaderText}> Website: </Text>
				<Text style = {styles.websiteText} onPress = {() => {
					Linking.openURL('https://www.goodwillsocal.org');
				}}> 
					www.goodwillsocal.org 
				</Text>
				<Text/>
				<FlatList 
					data = {markers} 
					renderItem = {renderItem} 
					keyExtractor = {item => item.id}
				/>
			</View>
			<View style = {styles.mapContainer}>
				<MapView 
				style = {styles.map} 
				provider = {MapView.PROVIDER_GOOGLE} 
				initialRegion = {{
					latitude: 34.0668,
					longitude: -118.1684,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}>
					<Marker pinColor = 'blue'
						coordinate = {school[0].coordinate}
						title = {school[0].title}
						description = {school[0].description}
					/>
					{markers.map((marker, index) => (
						<Marker
							key = {index}
							coordinate = {marker.coordinate}
							title = {marker.title}
							description = {marker.description}
						/>
					))}
					
				</MapView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex:1,
		backgroundColor: '#23395d'
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	mapContainer: {
		flex: 6
	},
	headerContainer: {
		flex: 2,
		backgroundColor: '#33373d',
		alignItems: 'center'
	},
	addressContainer: {
		flex: 1,
		alignItems: 'center'
	},
	textInput: {
		color: '#100c08',
		fontSize: 17,
		marginLeft: 10
	},
	subHeaderText: {
		fontSize: 16,
		color: 'white'
	},
	text: {
		fontSize: 15,
		color: 'black',
	},
	headerText: {
		fontSize: 18,
		justifyContent: 'center',
		color: 'white'
	},
	websiteText: {
		fontSize: 16,
		color: '#008080'
	},
	cardContainer: {
			flex: 1,
			flexDirection: 'row',
			backgroundColor: '#F5F5F5',
			justifyContent: 'center',
			padding: 10,
			borderRadius: 20,
			marginVertical: 8,
			marginHorizontal: 10
	},
});

export default Map;