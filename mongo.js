db.getCollection('crickets').find({},
                {"players.playerName":1 })
			  
			  
db.getCollection('crickets').find({},
                 {players:{ 
				 
		            "$elemMatch" : 
					           {"status" : "baating"} 
					     }
                    })
						  
db.getCollection('crickets').aggregate([
        {$match:{"team_name":"taem1"}},
            {$project:{
                 "players":
                    {
                        "playerName":1,
                        "_id":1,
                        "status":1
                     }
            
            }}  
          ])



db.getCollection('setup_stores').find({"_id" : ObjectId("5f9f87bd3097f1251c6e8093")},{mobile:1})



 let fetchData=await addProductModel.aggregate([
     {$match:{ "_id" :mongoose.Types.ObjectId(req.body.product_id)}},
     {$lookup:{from:"catogries",localField:"catogry_id",foreignField:"_id",as:"catogry"}},
     {$unwind:{path:'$catogry',preserveNullAndEmptyArrays:true}},
     {$lookup:{from:"subcatogries",localField:"catogry_id",foreignField:"catogry_id",as:"sub_catogry"}},
     {$unwind:{path:'$sub_catogry',preserveNullAndEmptyArrays:true}},
     {$project:{
         _id:0,
         product_name:1,
         mrp:1,
         piece:1,
         size:1,
         color:1,
         catogry_name:'$catogry.catogry_name',
         sub_catogry_name:'$sub_catogry.sub_catogry_name',

       }}


  ])



db.getCollection('add_products').aggregate([
         {$match:{ "merchant_id" : ObjectId("5fa0f559a946991f6cff3702")}},
          { $group: { "_id": "$catogry_id"} },
          {$lookup:{from:"catogries",localField:"catogry_id",foreignField:"_id",as:"catogry_name"}},


       ]).pretty()
	   
	   
	   db.getCollection('add_products').aggregate([
         {$match:{ "_id" : ObjectId("5fa0f6b2a946991f6cff3704")}},
         {$lookup:{from:"catogries",localField:"catogry_id",foreignField:"_id",as:"catogry_name"}},
        
           {$lookup:{from:"subcatogries",localField:"catogry_id",foreignField:"catogry_id",as:"sub_catogry_name"}},
          

       ]).pretty()
	   
	   
	
	   
	   db.getCollection('services').aggregate([
             {$lookup: {from: 'locations',localField: 'parent_location.location_id',foreignField: '_id',  as: 'location_details'}},
             {$project:{
               location_details:'$location_details.location_name',
               permalink: 1,
               featured_image: 1,
               section_image: 1,
               seo_description: 1,
               parent_location:{
                            $cond: { if: {
                                $ne: [ "$location_details.location_name", [] ] },
                                then: '$location_details.location_name'+'$services.parent_location', else: '' }
                        },
               seo_title: 1,
               index: 1,
           
             }}])




 ServiceModel.aggregate([
                {$match: where},
                {
                    $lookup: {
                        from: 'locations',
                        localField: 'parent_location.location_id',
                        foreignField: '_id',
                        as: 'location_details'
                    }
                },
                {
                    $project: {
                        location_details: '$location_details.location_name',
	   
	   
	   new branch --->
	   $ git checkout -b dev
       Switched to a new branch 'dev'
       $ git push origin dev
	    dev----->master
	    git checkout main
		
		git branch [branchName]






		  
						 
