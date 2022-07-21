#include<iostream>
using namespace std;

int main(){
int n;
cin>>n;
int arr[n];
for(int i=0;i<n;i++){
    cin>>arr[i];
}
for(int i=0;i<(1<<n);i++){
    int ans=0;
    for(int j=0;j<n;j++){
        if(i&(1<<j))
        ans+=arr[j];
        else
        ans-=arr[j];
    }
    if(ans%360==0){
    cout<<"YES"<<"\n";
    return 0;
    }
}
cout<<"NO\n";
return 0;
}