import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { SliderBox } from 'react-native-image-slider-box';
import { AccordionItem } from 'react-native-accordion-list-view';




const { width, height } = Dimensions.get('window');


var frames = [];
var frames1 = [];
var right_included = [];
var wrong_included = [];
var itinerary_list = [];
var additional_frames = [];
var package_options=[];
var pick_up_information_array=[];
var pick_up_information=["Enter your hotel name and address at the checkout page", "The pick up service is available in Varanasi City areas only", "The operator will contact you via phone call the day before your scheduled tour to reconfirm your exact pick up time and location", "Please be at your accomodation's lobby 10 minutes prior to your scheduled pick up time. Failure to arrive at the specified time will be considered a no-show and no refunds shall be provided", "Please be patient in cases of unforeseen delays due to traffic conditions in certain routes"];
var itinerary = ["09:00 hotel pick up", "Head over to Sarnath", "Visit Dhamek Stupa, Chaukhandi Stupa, Jain temple, Buddha temple, Sarnath museum, Ashok Pillar, and Deer park", "13:30 lunch at a local restaurant (own expense)", "Explore the city of Varanasi", "Visit new Vishwanath temple in Bnaras Hindu University, Sankat Mochan temple, Tulsi Manas temple, Durga temple, Tridev temple, and Kaudi Mata temple", "Watch the Ganga Aarti at Dasaswamedh Ghat", "19:00 hotel drop off"];
var additional = ["Pregnant women, persons with disabilities, and elderly people are weolcome to join the tour", "Women are required to cover up to enter the temples. Please wear long pants to cover your knees, long-sleeved shirts, and scarves to wrap around and cover your hair", "Footwear must be removed before entering the temples; socks may be worn inside them", "Please note that a moderate amount of walking is involved in this tour", "It's recommended that you purchase insurance before booking this tour"]
var right = ["English-speaking guide", "Bottled drinking water", "Round-trip transfers to and from your hotel", "Transportation by air conditioned vehicle"]
var wrong = ["Meals and beverages", "Insurance", "Boat ride: India passport holders: INR50/person and Non India passport holders: INR200/person", "Entrance fee: Sarnath: INR7 per person (India passport holders) and INR110 per person(non India passport holders)", "Entrance fee: Benaras Hindu University: INR40 per person (India passport holders) and INR100 per person (non India passport holders)"];
const img = [require('../assets/varanasighat.jpg'), require('../assets/varanasitemple.jpg'), require('../assets/gangaaarti.jpg'),];
var Bottom_tags = ["English", "Private group", "Hotel Pick Up", "10hr Duration"];
var package_option_tags=["Free cancellation (24-hours notice)", "Instant confirmation", "Book now for tomorrow"];


//for bottom tags
for (let i = 0; i < 4; i++) {
    frames.push(
        <View style={{ backgroundColor: "#FFF", borderRadius: 10, paddingLeft: 10, paddingTop: 10, marginRight: 0, marginLeft: 0, }}>
            <Text style={{ fontSize: 15, backgroundColor: "#EAEAEA", borderRadius: 7, paddingLeft: 6, paddingRight: 6, paddingTop: 5, paddingBottom: 5 }}>{Bottom_tags[i]}</Text>
        </View>)

}

//for package option tags
for (let i = 0; i < 3; i++) {
    package_options.push(
        <View style={{ backgroundColor: "#FFF", borderRadius: 10, paddingLeft: 10, paddingTop: 10, marginRight: 0, marginLeft: 0, }}>
            <Text style={{ fontSize: 15, backgroundColor: "#EAEAEA", borderRadius: 7, paddingLeft: 6, paddingRight: 6, paddingTop: 5, paddingBottom: 5 }}>{package_option_tags[i]}</Text>
        </View>)

}

//for what's included part - the parts that are available
for (let i = 0; i < 4; i++) {
    right_included.push(
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <View style={{ width: width * .1, paddingLeft: 10, paddingTop: 15, }}><Image source={require("../assets/tick.png")} style={{ width: 13, height: 13, }} /></View>
            <Text style={{ color: "#323232", paddingTop: 10, fontSize: 16, }}>{right[i]}</Text>
        </View>
    )
}

//for what's included part - the parts that are not available
for (let i = 0; i < 4; i++) {
    wrong_included.push(
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <View style={{ width: width * .1, paddingLeft: 10, paddingTop: 15, }}><Image source={require("../assets/redcross.png")} style={{ width: 13, height: 13, }} /></View>
            <Text style={{ color: "#323232", paddingTop: 10, fontSize: 16, }}>{wrong[i]}</Text>
        </View>
    )
}
//for itinerary list
for (let i = 0; i < 8; i++) {
    itinerary_list.push(
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16, }}>{itinerary[i]}</Text>
        </View>
    )
}

//for additional information list
for (let i = 0; i < 5; i++) {
    additional_frames.push(
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16, }}>{additional[i]}</Text>
        </View>
    )
}

//for pick up information array
for (let i = 0; i < 5; i++) {
    pick_up_information_array.push(
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16, }}>{pick_up_information[i]}</Text>
        </View>
    )
}

//for before you book collapsable 
var before_you_book = [
    <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 20, color: "black", paddingBottom: 20 }}>Itinerary</Text>
        {itinerary_list}
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Others</Text>
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16, }}>The sequence of the itinerary may be subject to change depending on your pick up location</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Eligibility</Text>
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16, }}>Children aged 0-5 can join this activity free of charge provided they will not occupy separate seats</Text>
        </View>

        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginTop: 10 }}>Additional Information</Text>
        {additional_frames}
    </View>
];


//terms and conditions
var terms_and_conditions = [
    <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Confirmation</Text>
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16 }}>You'll get confirmation within minutes. If you don't see any confimation, reach out to our customer support.</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Cancellation Policy</Text>
        <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black" }}>{`\u25CF`}</Text>
            <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 10, fontSize: 16 }}>You'll get a refund if you cancel at least 24 hour(s) before the activity starts</Text>
        </View>
    </View>
];

//how to use

var how_to_use = [
    <View style={{marginBottom:20}}>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Usage validity</Text>
    <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
        <Text style={{ paddingTop: 5, color: "black" }}>{`\u25CF`}</Text>
        <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 5, fontSize: 16 }}>Use your voucher at the selected date and time</Text>
    </View>
    <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Vourcher Type</Text>
    <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
        <Text style={{ paddingTop: 5, color: "black" }}>{`\u25CF`}</Text>
        <Text style={{ color: "#323232", marginLeft: 10, paddingTop: 5, fontSize: 16 }}>Present your mobile vourcher</Text>
    </View>
    <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 30, color: "black", marginBottom: 10 }}>Pick Up Information</Text>
    <Text style={{ color: "#323232", paddingTop: 5, fontSize: 16, fontWeight:"bold", color:"black" }}>Hotel Pick Up Information</Text>    
    {pick_up_information_array}
    </View>
];


//collapsable menu part
frames1 = [
    <View>
        <AccordionItem
            customTitle={() => <Text style={{ fontSize: 18, fontWeight: "bold", margin: 10, color: "black" }}>What's included</Text>}
            customBody={item => <Text>{right_included}{wrong_included}</Text>}
            animationDuration={400}
            isOpen={true}
            onPress={(isOpen) => console.log(isOpen)}

        />
        <View style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#ddd",

        }} />
        <AccordionItem
            customTitle={() => <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15, color: "black" }}>Before you Book</Text>}
            customBody={item => <Text>{before_you_book}</Text>}
            animationDuration={400}
            isOpen={false}
            onPress={(isOpen) => console.log(isOpen)}
        />
        <View style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#ddd",

        }} />
        <AccordionItem
            customTitle={() => <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15, color: "black" }}>Terms & Conditions</Text>}
            customBody={item => <Text>{terms_and_conditions}</Text>}
            animationDuration={400}
            isOpen={false}
            onPress={(isOpen) => console.log(isOpen)}
        />
        <View style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#ddd",

        }} />
        <AccordionItem
            customTitle={() => <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15, color: "black" }}>How to Use</Text>}
            customBody={item => <Text>{how_to_use}</Text>}
            animationDuration={400}
            isOpen={false}
            onPress={(isOpen) => console.log(isOpen)}
        />
        <View style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#ddd",

        }} />


    </View>

];




export default function ActivityDetail() {

    return (
        <View>
       

            <ScrollView  style={{marginBottom:100}}>
                
                <View style={{ flex: 1 }}>
       
                    <SliderBox images={img} ImageComponentStyle={styles.img}
                        dotColor="white" inactiveDotColor="grey" dotStyle={{ width: width * .3, height: 3, padding: 0, marginHorizontal: -10, marginVertical: 15 }} autoplay={true} autoplayInterval={3000} circleLoop={true} />
                    <View style={{ position: "absolute", flex: 1, flexDirection: "row" }}>
                        <View style={{width:width*.3}}><View style={{marginLeft: 10, width: 50,height: 50, backgroundColor: "white", borderRadius: 70}}><Image source={require("../assets/back.png")} style={{ width: 30, height: 30, margin:10}} /></View></View>

                    <View style={{width:width*.7, justifyContent:"flex-end", flexDirection:"row"}}>
                    <View style={{
                        marginLeft: 10, width: 50,
                        height: 50, backgroundColor: "white", borderRadius: 70
                    }}><Image source={require("../assets/heart.png")} style={{ width: 25, height: 25, margin:12}} /></View>
                    <View style={{
                        marginLeft: 10, width: 50,
                        height: 50, backgroundColor: "white", borderRadius: 70
                    }}><Image source={require("../assets/share.png")} style={{ width: 25, height: 25, margin:12}} /></View>
                    <View style={{
                        marginLeft: 10, width: 50, marginRight:10, 
                        height: 50, backgroundColor: "white", borderRadius: 70
                    }}><Image source={require("../assets/shoppingcart.png")} style={{ width: 25, height: 25, margin:12}} /></View>                    
                      </View> 
                    </View>
                    
                </View>

                <View style={styles.viewContainer}>
                    <View style={{ padding: 20, flexDirection: "row" }}><Text style={{ backgroundColor: "#FFEED6", padding: 7, borderRadius: 7, fontWeight: "bold", color: "#FF7B20" }}>Best Price Guarantee</Text></View>
                    <View style={{ paddingLeft: 20, paddingTop: -10 }}><Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>Varanasi Private Day Tour</Text></View>
                    <View style={{ paddingLeft: 20, paddingTop: 10 }}><Text style={{ color: "black", fontSize: 14 }}>100+ booked</Text></View>
                    <View style={{ flexDirection: "row", paddingLeft: 10, flex: 1, width: width * .9, flexWrap: "wrap" }}>{frames}
                    </View>
                    <View style={{ backgroundColor: "#FFEFE9", width: width * .9, paddingLeft: 20, alignContent: "center", alignSelf: "center", marginTop: 25, borderRadius: 10, paddingBottom:25}}>
                    <View style={{ width: width * .6, flexGrow: 1, flexDirection: "row" }}>
            <Text style={{ paddingTop: 10, color: "black", paddingBottom:20 }}>{`\u25CF`}</Text>
            <Text style={{ color: "#787878", marginLeft: 10, paddingTop: 10, fontSize: 16, }}>Embark on a spiritual journey to one of the most sacred places in India, the mystic city of Varanasi</Text>
        </View>
                        </View>
                </View>
                <View><View style={{ width: width * .9, flexGrow: 1, flexDirection: "row" }}>
                    <View style={styles.SquareShapeView} />
                    <Text style={{ color: "black", paddingTop: 20, fontSize: 22, fontWeight: "bold" }}>Package options</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", marginBottom: 20 }}>
                        <Text style={{ marginLeft: 7, fontSize: 15, borderRadius: 15, paddingLeft: 6, paddingRight: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 5, color: "black", borderColor: "#ccc", borderWidth: 1.5 }}>03 May</Text>
                        <Text style={{ marginLeft: 7, fontSize: 15, borderRadius: 15, paddingLeft: 6, paddingRight: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 5, color: "black", borderColor: "#ccc", borderWidth: 1.5 }}>04 May</Text>
                        <Text style={{ marginLeft: 7, fontSize: 15, borderRadius: 15, paddingLeft: 6, paddingRight: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 5, color: "black", borderColor: "#ccc", borderWidth: 1.5 }}>05 May</Text>
                        <Text style={{ marginLeft: 7, fontSize: 15, borderRadius: 15, paddingLeft: 6, paddingRight: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 5, color: "black", borderColor: "#ccc", borderWidth: 1.5 }}>All Dates</Text>
                        
                    </View>
                    <View>
                    <Text style={{ color: "#484848", marginLeft: 20, fontSize: 18}}>Package Type</Text>
                    <ScrollView horizontal>
                       <View style={{width:width*.3,margin:20, borderWidth:1, borderRadius:10, padding:10, borderColor:"#5F5F5F"}}><Text style={{fontWeight:"bold", color:"black", fontSize:16}}> Group of 6 </Text>
                       <Text style={{fontWeight:"bold", color:"black", fontSize:16}}> <Image source={require("../assets/rupee.jpg")} style={{ width: 25, height: 25, marginTop:5}} />850</Text></View>
                       <View style={{width:width*.3, marginTop:20, marginBottom:20, borderWidth:1, borderRadius:10, padding:10, borderColor:"#5F5F5F",}}><Text style={{fontWeight:"bold", color:"black", fontSize:16}}> Group of 5 </Text>
                       <Text style={{fontWeight:"bold", color:"black", fontSize:16}}> <Image source={require("../assets/rupee.jpg")} style={{ width: 25, height: 25, marginTop:5}} />950</Text></View>
                       <View style={{width:width*.3,margin:20, borderWidth:1, borderRadius:10, padding:10, borderColor:"#5F5F5F"}}><Text style={{fontWeight:"bold", color:"black", fontSize:16}}> Group of 4 </Text>
                       <Text style={{fontWeight:"bold", color:"black", fontSize:16}}> <Image source={require("../assets/rupee.jpg")} style={{ width: 25, height: 25, marginTop:5}} />1,050</Text></View>
                       <View style={{width:width*.3, marginTop:20, marginBottom:20, borderWidth:1, borderRadius:10, padding:10, borderColor:"#5F5F5F"}}><Text style={{fontWeight:"bold", color:"black", fontSize:16}}> Group of 3 </Text>
                       <Text style={{fontWeight:"bold", color:"black", fontSize:16}}> <Image source={require("../assets/rupee.jpg")} style={{ width: 25, height: 25, marginTop:5}} />1,150</Text></View>
                       <View style={{width:width*.3,margin:20, borderWidth:1, borderRadius:10, padding:10, borderColor:"#5F5F5F"}}><Text style={{fontWeight:"bold", color:"black", fontSize:16}}> Group of 2 </Text>
                       <Text style={{fontWeight:"bold", color:"black", fontSize:16}}> <Image source={require("../assets/rupee.jpg")} style={{ width: 25, height: 25, marginTop:5}} />1,750</Text></View>
                       <View style={{ marginTop:20, marginBottom:20, borderWidth:1, borderRadius:10, padding:10, borderColor:"#5F5F5F"}}><Text style={{fontWeight:"bold", color:"black", fontSize:16}}> Solo Traveler </Text>
                       <Text style={{fontWeight:"bold", color:"black", fontSize:16}}> <Image source={require("../assets/rupee.jpg")} style={{ width: 25, height: 25, marginTop:5}} />2,900</Text></View>
                       
                    </ScrollView>
                    <View style={{ flexDirection: "row", paddingLeft: 10, flex: 1, width: width * .9, flexWrap: "wrap" , marginBottom:10}}>{package_options}
                    </View>
                    </View>
                    
                </View>
                <View style={{
                    height: 0.6,
                    width: "100%",
                    backgroundColor: "#ddd",
                     }} />

                <View>
                    {frames1}
                </View>
                <View>
                    <View style={{ width: width * .9, flexGrow: 1, flexDirection: "row", marginTop:30 }}>
                    <View style={styles.SquareShapeView} />
                    <Text style={{ color: "black", marginTop: 20, fontSize: 22, fontWeight: "bold" }}>What to expect</Text>
                    </View>
                    <View style={{marginLeft:20, width:width*.9}}>
                    <Text style={{fontSize:16, color:"black", lineHeight:23}}>Take on a spiritual journey to one of the most sacred places in India - the city of Varanasi. Revered as one of the oldest living cities in the world, experience the rick culture that has been carried over centuries. Begin your quest to find solace with a convenient pick up service from our hotel in Agra inside the vehicle size of your choice and you'll be ready to set your first stop at Sarnath. Visit the sacred place where Lord Buddha preached his first sermon after his enlightenment and head over to nearby landmarks such as the Dhamek Stupa, Chaukhandi Stupa, Jain temple, Buddha temple, Sarnath museum, Ashok Pillar, and Deer park before discovering the city of Varanasi further. Head over to Banaras hindu University to see the new Vishwanath temple and pay a bisit to various temples including Sankat Mochan, Tulsi Manas, Durga, Tridev and Kaudi Mata right after. As the sun sets in the city, you will be experiencing 1 of the 5 rituals performed for the worship of the sacred Ganges River called the Ganga Aarti at the Dasaswamedh Ghat. Cap off your full day your as you watch groups of young pandits, Brahmins and sadhus, draped in saffrom robes waving incense sticks or holding large flaming lamps while exerting intricate and extravagant movement and emitting devotional chants an hymns. Experience a one-of-a-kind discovery and re-discovery of one's psiritual being by visiting Varanasi, the most divine place in India.</Text>
                    <Image source={require("../assets/sarnathstupa.jpg")} style={{ width: width*.9, height: 220, marginTop:20, borderRadius:10}} />
                    <View style={{ flexGrow: 1, flexDirection: "row"}}>
            <View style={{width:25, paddingLeft: 1, paddingTop: 15, }}><Image source={require("../assets/up.png")} style={{ width: 13, height: 13, }} /></View>
            <Text style={{ color: "#323232", paddingTop: 10, fontSize: 14, color:"#8E8E8E"}}>Explore the sacred site where Lord Buddha has first preached a sermon after his enlightenment at Sarnath</Text>
        </View>
        <Image source={require("../assets/gangaghat.jpg")} style={{ width: width*.9, height: height*.3, marginTop:20, borderRadius:10}} />
                    <View style={{ flexGrow: 1, flexDirection: "row"}}>
        <View style={{ flexGrow: 1, flexDirection: "row"}}>
            <View style={{width:25, paddingLeft: 1, paddingTop: 15, }}><Image source={require("../assets/up.png")} style={{ width: 13, height: 13, }} /></View>
            <Text style={{ color: "#323232", paddingTop: 10, fontSize: 14, color:"#8E8E8E"}}>Marvel at the unique architectural styles of centuries old buildings displaying the city's culture and history</Text>
        </View></View>
        <Image source={require("../assets/gangarti.jpg")} style={{ width: width*.9, height: height*.3, marginTop:20, borderRadius:10}} />
                    <View style={{ flexGrow: 1, flexDirection: "row"}}>
        <View style={{ flexGrow: 1, flexDirection: "row"}}>
            <View style={{width:25, paddingLeft: 1, paddingTop: 15, }}><Image source={require("../assets/up.png")} style={{ width: 13, height: 13, }} /></View>
            <Text style={{ color: "#323232", paddingTop: 10, fontSize: 14, color:"#8E8E8E"}}>Be in awe of the incredible symbolic ritual of the Varanasi Ganga Aarti at the Dasaswamedh Ghat</Text>
        </View></View>
        
                    </View>
                    
                </View>
             
            </ScrollView >
            <View style={styles.footer}>
        <View>
        <View style={{flexGrow: 1, flexDirection: "row", marginLeft:10, marginTop:10 }}>
        <Text style={{fontWeight:"bold", color:"black", fontSize:24}}> ₹850&nbsp;</Text>
        <Text style={{color:"grey", fontSize:16, textDecorationLine:"line-through", paddingTop:7}}> ₹1,150</Text></View>            
        </View>
        <View style={{flexGrow: 1, flexDirection: "row", justifyContent:"center"}}>
        <TouchableOpacity><View style={{backgroundColor:"#EFA410", marginLeft: 10, borderRadius:8, }}><Text style={{fontWeight:"bold", color:"white", fontSize:18, paddingLeft:40, paddingRight:40, paddingTop:10, paddingBottom:10}}> Add to Cart</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={{backgroundColor:"#F54C12", marginLeft: 10, borderRadius:8,marginRight:10 }}><Text style={{fontWeight:"bold", color:"white", fontSize:18, paddingLeft:40, paddingRight:40, paddingTop:10, paddingBottom:10}}> Book now</Text></View></TouchableOpacity>
        </View>            
        </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        height: height * .5,
        width: width * 1,
    },
    viewContainer: {
        flex: 1.3,
        backgroundColor: "white",
        bottom: 15,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    SquareShapeView: {
        //To make Square Shape
        width: 10,
        height: 30,
        margin: 20,
        backgroundColor: "orange",
        borderRadius: 5

    },footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: 'white',
        borderTopWidth:0.7,
        borderTopColor:"#ccc"
      },
});