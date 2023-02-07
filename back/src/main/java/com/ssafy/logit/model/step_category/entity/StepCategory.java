package com.ssafy.logit.model.step_category.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.logit.model.common.ResultStatus;
import com.ssafy.logit.model.job.entity.JobEvent;
import com.ssafy.logit.model.step_category.entity.category.CodingTest;
import com.ssafy.logit.model.step_category.entity.category.Document;
import com.ssafy.logit.model.step_category.entity.category.Interview;
import com.ssafy.logit.model.step_category.entity.category.StepEtc;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Setter(value = AccessLevel.PRIVATE)
public class StepCategory {

    @Id
    @GeneratedValue
    @Column(name = "step_category_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jobevent_id")
    private JobEvent jobEvent;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate typeDate;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ResultStatus resultStatus;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private JobCategory jobCategory;

    @Column(length = 30)
    private String name;

    @OneToMany(mappedBy = "stepCategory")
    private List<Document> documentList = new ArrayList<>();

    @OneToMany(mappedBy = "stepCategory")
    private List<CodingTest> codingTestList = new ArrayList<>();

    @OneToMany(mappedBy = "stepCategory")
    private List<StepEtc> stepEtcList = new ArrayList<>();

    @OneToMany(mappedBy = "stepCategory")
    private List<Interview> interviewList = new ArrayList<>();


    public void addJobEvent(JobEvent jobEvent) {
        if(jobEvent==null){
            throw new NoSuchElementException();
        }
        jobEvent.getStepCategoryList().add(this);
        this.jobEvent = jobEvent;
    }

    // 생성 메소드 //
    public static StepCategory createCategory(JobEvent jobEvent,LocalDate typeDate,JobCategory jobCategory,String name){
        StepCategory stepCategory = new StepCategory();
        stepCategory.addJobEvent(jobEvent);
        stepCategory.setTypeDate(typeDate);
        stepCategory.setResultStatus(ResultStatus.INPROGRESS);
        stepCategory.setJobCategory(jobCategory);
        stepCategory.setName(name);
        return stepCategory;
    }

    // 수정 메소드 //
    public StepCategory updateCategory(LocalDate typeDate,ResultStatus resultStatus,String name){
        this.setTypeDate(typeDate);
        this.setResultStatus(resultStatus);
        this.setName(name);
        return this;
    }


}